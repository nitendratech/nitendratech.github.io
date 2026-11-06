---
title: "SQL LIKE Operator"
description: "How the SQL LIKE operator works in the WHERE clause: pattern matching with the percent (%) and underscore (_) wildcards, LIKE and NOT LIKE examples on a customer table."
pubDate: 2023-07-03
category: "Data Engineering"
subcategory: "SQL"
---

The [SQL](https://www.nitendratech.com/database/learn-sql/)-like operator is used in `WHERE` the clause that compares a column value to similar values using wildcard operations. LIKE operator is used to filtering records and pattern matching for columns that are of `VARCHAR` data type. It can be used with `SELECT`, `INSERT`, `UPDATE` or `DELETE` statement in SQL.

We can also use the `NOT` operator with like when we want to negate the results of `LIKE` operator. It excludes rows from the result set that contains a specified pattern.

We can use two wildcards with `LIKE` Operator.

| Wildcard | Description |
| --- | --- |
| Percent Sign (`%`) | Matches any string of any length (including zero length) |
| Underscore (`_`) | Matches on a Single Character or number |

## Syntax of SQL Like Operator

```sql
expression [NOT] LIKE pattern [ ESCAPE 'escape_character' ];
```

The below table gives some examples of SQL `Like` operators.

| LIKE Operator | Description |
| --- | --- |
| WHERE column LIKE 'b%' | Returns all the values that start with "b" |
| WHERE column LIKE '%b' | Returns all the values that end with "b" |
| WHERE column LIKE '%b%' | Returns all the values for a column that starts and ends with any value, but have 'b' in between them |
| WHERE Column LIKE '_a%' | Returns all the values for a column with the letter 'a' in the second position. |
| WHERE column LIKE 'b%a' | Returns all the value for the column that starts with the letter `b` and ends with letter `a` |

Examples used in this tutorial are based on this Oracle SQL [file](https://github.com/nitendragautam/blog_tutorials/blob/master/database/oracle_Sample_data.sql) that you can find on my GitHub page.

## Using percent(%) sign Wildcard

### LIKE Operator

Let's see an example where we will use a percentage sign(%) wild card to select the data.

```sql
SELECT * FROM OT.CUSTOMERS_DATA WHERE NAME LIKE 'As%';
```

| CUS_ID | NAME | ADDRESS | WEBSITE | CRDT_LMT |
| --- | --- | --- | --- | --- |
| 110 | Assurant | 101 N Falahee Rd, Jackson, MI | http://www.assurant.com | 650 |
| 111 | Assurano | 102 N Falahee Rd, Miami, FL | http://www.assurano.com | 800 |

As we can see, two records in the table start with the letter `As`. Now we will select the data from the customer's data table whose name ends with `y` using a percentage sign.

```sql
SELECT * FROM OT.CUSTOMERS_DATA WHERE NAME LIKE '%y';
```

| CUS_ID | NAME | ADDRESS | WEBSITE | CRDT_LMT |
| --- | --- | --- | --- | --- |
| 109 | DTE Energy | 8110 Jackson Rd, Ann Arbor, MI | http://www.dteenergy.com | 200 |
| 112 | State Country | 700 Hidden Ridge, Irving, TX | http://www.StateCountry.com | 800 |

Let's see how we use the % wildcard multiple times within the same string.

```sql
SELECT * FROM OT.CUSTOMERS_DATA WHERE NAME LIKE '%y%';
```

| CUS_ID | NAME | ADDRESS | WEBSITE | CRDT_LMT |
| --- | --- | --- | --- | --- |
| 103 | Reynolds American | 1610 Betrayal Crt, Bangalore, Kar | http://www.reynoldsamerican.com | 5000 |
| 105 | Henry Schein | 1615 Crackers Crt, Bangalore – India, Kar | http://www.henryschein.com | 5000 |
| 109 | DTE Energy | 8110 Jackson Rd, Ann Arbor, MI | http://www.dteenergy.com | 200 |
| 112 | State Country | 700 Hidden Ridge, Irving, TX | http://www.StateCountry.com | 800 |

Here, we are trying to find the names in the customer data table which have `y` in between.

### NOT LIKE Operator

Let's look at some examples using `NOT LIKE` operator. It is going to return the results from `CUSTOMERS_DATA` table whose name column does not have `y` at the end.

```sql
SELECT * FROM OT.CUSTOMERS_DATA WHERE NAME NOT LIKE '%y';
```

| CUS_ID | NAME | ADDRESS | WEBSITE | CRDT_LMT |
| --- | --- | --- | --- | --- |
| 102 | Unum Group | 1608 Amadeus St, Bangalore, Kar | http://www.unum.com | 3500 |
| 103 | Reynolds American | 1610 Betrayal Crt, Bangalore, Kar | http://www.reynoldsamerican.com | 5000 |
| 104 | Group 1 Automotive | 1614 Crackers Rd, Bangalore – India, Kar | http://www.group1auto.com | 2300 |
| 105 | Henry Schein | 1615 Crackers Crt, Bangalore – India, Kar | http://www.henryschein.com | 5000 |
| 106 | Norfolk Southern | 1618 Footloose St, Bangalore – India, Kar | http://www.nscorp.com | 900 |
| 107 | Reinsurance Group of America | 1619 Footloose Rd, Bangalore – India, Kar | http://www.rgare.com | 900 |
| 108 | Public Service Enterprise Group | 1621 Gargon! Blvd, Bangalore – India, Kar | http://www.pseg.com | 600 |
| 110 | Assurant | 101 N Falahee Rd, Jackson, MI | http://www.assurant.com | 650 |
| 111 | Assurano | 102 N Falahee Rd, Miami, FL | http://www.assurano.com | 800 |

Let's look at another example where we will select the data from the customer's data table whose names do not have `'y'` in between.

```sql
SELECT * FROM OT.CUSTOMERS_DATA WHERE NAME NOT LIKE '%y%';
```

| CUS_ID | NAME | ADDRESS | WEBSITE | CRDT_LMT |
| --- | --- | --- | --- | --- |
| 102 | Unum Group | 1608 Amadeus St, Bangalore, Kar | http://www.unum.com | 3500 |
| 104 | Group 1 Automotive | 1614 Crackers Rd, Bangalore – India, Kar | http://www.group1auto.com | 2300 |
| 106 | Norfolk Southern | 1618 Footloose St, Bangalore – India, Kar | http://www.nscorp.com | 900 |
| 107 | Reinsurance Group of America | 1619 Footloose Rd, Bangalore – India, Kar | http://www.rgare.com | 900 |
| 108 | Public Service Enterprise Group | 1621 Gargon! Blvd, Bangalore – India, Kar | http://www.pseg.com | 600 |
| 110 | Assurant | 101 N Falahee Rd, Jackson, MI | http://www.assurant.com | 650 |
| 111 | Assurano | 102 N Falahee Rd, Miami, FL | http://www.assurano.com | 800 |

As we see from the above query, we are getting results from customers' data tables whose name columns do not have `y` in between.

## Using Underscore(_) wildcard

Let's see how the underscore `_` wildcard works in the Oracle LIKE condition. In this example, we are only trying to match the last character in the column name.

```sql
SELECT * FROM OT.CUSTOMERS_DATA WHERE NAME LIKE 'Assuran_';
```

| CUS_ID | NAME | ADDRESS | WEBSITE | CRDT_LMT |
| --- | --- | --- | --- | --- |
| 110 | Assurant | 101 N Falahee Rd, Jackson, MI | http://www.assurant.com | 650 |
| 111 | Assurano | 102 N Falahee Rd, Miami, FL | http://www.assurano.com | 800 |

When we use the underscore wildcard, we need to make sure that the length of the column to be compared is of the same length. Otherwise, Oracle won't give us any results from the query.

Now, let's take a look at another example where we will use an underscore wildcard to filter columns at the start and end of the string.

```sql
SELECT * FROM OT.CUSTOMERS_DATA WHERE NAME LIKE '_ssuran_';
```

| CUS_ID | NAME | ADDRESS | WEBSITE | CRDT_LMT |
| --- | --- | --- | --- | --- |
| 110 | Assurant | 101 N Falahee Rd, Jackson, MI | http://www.assurant.com | 650 |
| 111 | Assurano | 102 N Falahee Rd, Miami, FL | http://www.assurano.com | 800 |

## Conclusion

In this blog post, we looked into how `SQL LIKE` operation can be used alongside WHERE operators in the Oracle database. We also looked into the percent(%) and underscore(_) wildcard.

---

*Originally published on nitendratech.com on 2023-07-03, updated 2024-02-18.*
