---
title: "SQL Coding Interview Questions for Data Engineers (With Solutions)"
description: "Interviews test SQL by making you write it. The coding problems that recur — Nth highest salary, duplicates, running totals, month-over-month change, and gaps — each with a clean, explained solution."
pubDate: 2026-11-23
category: "Core Tech & Programming"
subcategory: "SQL"
draft: false
---



Most SQL interview rounds are not "what is a JOIN?" — they hand you a table and a problem. These are the problems that recur across companies, each with the solution pattern worth remembering. Sample schema used throughout: `employees(id, name, dept, salary, hire_date)` and `orders(order_id, customer_id, order_date, amount)`.

## Ranking problems

### 1. Find the second-highest salary in the company

```sql
SELECT MAX(salary) AS second_highest
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);
```

The modern, general version uses a window function — it extends to "Nth highest" and "per department":

```sql
SELECT salary
FROM (SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk
      FROM employees) t
WHERE rnk = 2;
```

Know the difference: `DENSE_RANK` gives tied salaries the same rank with no gaps — exactly what "second-highest distinct salary" means.

### 2. Highest-paid employee in each department

```sql
SELECT dept, name, salary
FROM (SELECT *, ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC) AS rn
      FROM employees) t
WHERE rn = 1;
```

This is the single most-asked SQL pattern in data interviews ("top per group"). The window-function answer is expected; a correlated-subquery answer still works but reads as older style.

### 3. Find duplicate emails (or records) and their counts

```sql
SELECT email, COUNT(*) AS cnt
FROM users
GROUP BY email
HAVING COUNT(*) > 1;
```

Follow-up they always ask: **delete the duplicates, keeping one copy** — window function again: `ROW_NUMBER() OVER (PARTITION BY email ORDER BY id)`, delete where `rn > 1`.

## Aggregation and comparison problems

### 4. Running total of daily revenue

```sql
SELECT order_date,
       SUM(amount) AS daily_total,
       SUM(SUM(amount)) OVER (ORDER BY order_date) AS running_total
FROM orders
GROUP BY order_date
ORDER BY order_date;
```

Note the double `SUM` — aggregation inside a window function over the grouped rows.

### 5. Month-over-month growth

```sql
SELECT month,
       revenue,
       revenue - LAG(revenue) OVER (ORDER BY month) AS change,
       ROUND(100.0 * (revenue - LAG(revenue) OVER (ORDER BY month))
             / LAG(revenue) OVER (ORDER BY month), 2) AS pct_change
FROM monthly_revenue;
```

`LAG`/`LEAD` are the workhorses of comparison questions: previous value, next value, difference, percentage.

### 6. Customers who placed orders in consecutive months

Self-join or `LAG` on distinct order months per customer, then check the month difference equals 1. The `LAG` version is shorter:

```sql
SELECT DISTINCT customer_id
FROM (SELECT customer_id,
             LAG(order_month) OVER (PARTITION BY customer_id ORDER BY order_month) AS prev_month
      FROM (SELECT DISTINCT customer_id,
                   DATE_TRUNC('month', order_date) AS order_month
            FROM orders) m) t
WHERE order_month = prev_month + INTERVAL 1 MONTH;
```

(Dialect varies — `DATEADD` in SQL Server, `+ INTERVAL 1 MONTH` in Postgres/standard SQL. Saying you know it varies by dialect is itself a good interview signal.)

## Set and logic problems

### 7. Find employees who earn more than their manager

```sql
SELECT e.name AS employee, e.salary, m.name AS manager, m.salary
FROM employees e
JOIN employees m ON e.manager_id = m.id
WHERE e.salary > m.salary;
```

The self-join is the concept being tested — a table joined to itself with two aliases playing two roles.

### 8. Customers who never placed an order

```sql
SELECT c.customer_id, c.name
FROM customers c
LEFT JOIN orders o ON o.customer_id = c.customer_id
WHERE o.order_id IS NULL;
```

Or `NOT EXISTS` — often the better-performing and clearer choice at scale. Mention both; interviewers are checking whether you know `NOT IN` is the trap (it breaks on NULLs).

### 9. Pivot: total sales per product per quarter

```sql
SELECT product,
       SUM(CASE WHEN quarter = 'Q1' THEN amount ELSE 0 END) AS q1,
       SUM(CASE WHEN quarter = 'Q2' THEN amount ELSE 0 END) AS q2,
       SUM(CASE WHEN quarter = 'Q3' THEN amount ELSE 0 END) AS q3,
       SUM(CASE WHEN quarter = 'Q4' THEN amount ELSE 0 END) AS q4
FROM sales
GROUP BY product;
```

Conditional aggregation (`CASE` inside `SUM`) is the portable pivot — it works in every dialect, unlike vendor `PIVOT` syntax.

## The meta-lessons interviewers are scoring

- **Clarify before writing**: ties or distinct values? NULLs possible? Expected output shape? Thirty seconds of questions prevents the most common failure mode — solving a different problem.
- **Window functions are the modern dialect of SQL interviews**: ranking, top-per-group, running totals, and period comparisons are all window problems.
- **Say the edge cases out loud**: empty table, single row, all-equal salaries. Naming them unprompted reads as senior.

## Key takeaways

- Master five patterns — top-per-group, Nth-highest, duplicates, running totals, LAG/LEAD comparisons — and most SQL coding rounds are covered.
- Every solution here runs on sample/demo data only; the patterns transfer directly to warehouse SQL (Snowflake, BigQuery, Spark SQL, Databricks).

## Resources

- PostgreSQL SQL reference — https://www.postgresql.org/docs/current/sql.html
- Spark SQL programming guide — https://spark.apache.org/docs/latest/sql-programming-guide.html
