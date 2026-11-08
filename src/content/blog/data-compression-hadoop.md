---
title: "Data Compression Techniques in Hadoop Framework"
description: "An overview of data compression in Hadoop — why it helps with I/O and network bottlenecks, the trade-offs involved, and the DEFLATE, GZIP, BZIP2, LZO, LZ4, and Snappy codecs."
pubDate: 2018-05-28
category: "Data Engineering"
subcategory: "Hadoop"
draft: false
---

There are many challenges like Input/Output(I/O) and network-related bottlenecks which will frequently appear when working with the Hadoop framework to process massive data. This blog post talks about the understanding of different data compression techniques available in the Hadoop framework to solve this problem.

## Why Do We Need Data Compression?

In data-intensive [Hadoop](/blog/apache-hadoop/) workloads, Input/Output or I/O operation and network data transfer take a considerably longer amount of time to complete. Furthermore, the internal MapReduce "Shuffle" process is also under huge I/O pressure, as it has too often "spilled out" intermediate data to local disks before advancing from the Map phase to the Reduce Phase.

For any Hadoop cluster, disk, I/O, and network bandwidth are considered precious resources, which should be allocated accordingly. So the use of compressed files for storage not only saves disk space but also speeds up data transfer across the network. Also, when running a large volume of MapReduce jobs, a combination of data compression and decreased network load brings significant performance improvements as the I/O and network resource consumption are reduced throughout the MapReduce process pipeline.

## Data Compression Trade-off

Using data compression in the Hadoop framework is usually a tradeoff between I/O and speed of computation. When enabled to compression, it reduces I/O and network usage. Compression happens when MapReduce reads the data or when it writes it out.

When the [MapReduce](/blog/hadoop-mapreduce-framework/) job is fired up against compressed data, CPU utilization generally increases as data must be decompressed before the files can be processed by the Map and Reduce Tasks. Because of this, decompression usually increases the time of the job. However, it has been found that in many cases, overall job performance improves when compression is enabled in multiple phases of job configuration.

## Data Compression Supported by Apache Hadoop Framework

The Hadoop framework supports many compression formats for both input and output data. A compression format or a codec (coder-decoder) is a set of compiled, ready-to-use Java libraries that a developer can invoke programmatically to perform data compression and decompression in the MapReduce job. Each of these codecs implements an algorithm for compression and decompression and also has different characteristics.

Among the different data compression formats, some are splittable, which can further enhance performance when reading and processing large compressed files. So when a single large file is stored in [HDFS](/blog/hadoop-hdfs/), it is split into many data blocks and distributed across many nodes. If the file has been compressed by using the splittable algorithms, data blocks can be decompressed in parallel by using several [MapReduce](/blog/hadoop-mapreduce-framework/) tasks. However, if the file has been compressed by an algorithm that cannot be split, Hadoop must pull blocks together and use a single MapReduce task to decompress them.

Some compression techniques are explained below:

### DEFLATE:

DEFLATE is a compression algorithm whose standard implementation is ZLib. There is no commonly available command-line tool for producing files in DEFLATE format, as GZIP is normally used. (Note that the GZIP file format is DEFLATE with extra headers and a footer.) The `.deflate` is a filename extension is a Hadoop convention

### GZIP (GNU Zip)

It is a compression utility adopted by the GNU or Gnu's Not Unix project which generates compressed files. It is naturally supported by Hadoop. Not only that, it is based on the DEFLATE algorithm, which is a combination of LZ77 and Huffman Coding.

GZIP provides very good compression performance. In comparison to Snappy, it provides about 2.5 times more compression. But its write speed is not as good as Snappy's.

GZIP usually performs almost as well as Snappy in terms of reading performance. It is also not splittable, so it should be used with a container format. Note that one reason It is sometimes slower than Snappy for processing is that GZIP compressed files take up fewer blocks, so fewer tasks are required for processing the same data. For this reason, using smaller blocks with GZIP can lead to better performance.

### BZIP2

BZIP2 is a freely available, high-quality data compressor. It typically compresses files to within 10% to 15% of the best available techniques, while being around twice as fast at compression and six times faster at decompression. Using this compression technique, data is splittable in Hadoop. It generates a better compression ratio than GZIP, but is very slow.

Bzip2 provides excellent compression performance. But it can be significantly slower than other compression codecs such as Snappy in terms of processing performance. Unlike Snappy and GZIP, Bzip2 is inherently splittable.

In many examples, we have seen, bzip2 will normally compress around 9% better than GZIP, in terms of storage space. However, this extra compression comes with a significant read/write performance cost. This performance difference will vary with different machines, but in general, bzip2 is about 10 times slower than GZIP. For this reason, it's not an ideal codec for Hadoop storage, unless your primary need is reducing the storage footprint. One example of such a use case would be using Hadoop mainly for active archival purposes.

### LZO(Lempel-Ziv-Oberhumer)

This compression format is composed of much smaller (~256K) blocks of compressed data, allowing jobs to be split along block boundaries. It supports splittable compression, which enables parallel processing of compressed text file splits by MapReduce jobs

LZO is similar to Snappy in that it's optimized for speed as opposed to size. Unlike Snappy, LZO compressed files are splittable, but this requires an additional indexing step. This makes LZO a good choice for things like plain-text files that are not being stored as part of a container format. It should also be noted that LZO's license prevents it from being distributed with Hadoop and requires a separate install, unlike Snappy, which can be distributed with Hadoop.

It supports splittable compression, which enables the parallel processing of compressed text file splits by your MapReduce jobs. Furthermore, it needs to create an index when it compresses a file, as the compression blocks are of variable length. The index is used to tell the Mapper where it can safely split the compressed file. It is mainly used when one needs to compress text files.

### LZ4

It is a compression technique that creates a splittable compressed file in Hadoop. There is no need for external indexing when using this compression. It can be used at any level of speed/compression ratio in Hadoop: from fast mode reaching 500 MB/s compression speed up to high/ultra modes providing increased compression ratio, almost comparable with GZIP one.

### Snappy:

Snappy is a compression/decompression library. It does not aim for maximum compression or compatibility with any other compression library; instead, it aims for very high speeds and reasonable compression. It is widely used inside Google, in everything from BigTable and MapReduce.

Although Snappy doesn't offer the best compression sizes, it does provide a good trade-off between speed and size. Processing performance with Snappy can be significantly better than other compression formats. It's important to note that Snappy is intended to be used with a container format like Sequence Files or Avro since it's not inherently splittable.

## Summary of Compression format

File compression brings two major benefits.

- Reduces the space needed to store files
- Speeds up data transfer across the network, or to or from disk.

When dealing with large volumes of data, both of these savings can be significant, so it pays to carefully consider how to use compression in Hadoop.

There are many compression formats, tools, and algorithms, each with different characteristics. The below table gives different compressions.

| Compression format | Tool | Algorithm | Filename extension | Multiple files | Splittable |
| --- | --- | --- | --- | --- | --- |
| DEFLATE | N/A | DEFLATE | .deflate | No | No |
| GZIP | GZIP | DEFLATE | .gz | No | No |
| ZIP | zip | DEFLATE | .zip | Yes | Yes, at file boundaries |
| bzip2 | bzip2 | bzip2 | .bz2 | No | Yes |
| LZO | lzop | LZO | .lzo | No | No |

## References:

[Hadoop Application Architectures](https://www.amazon.com/_/dp/1491900083?tag=oreilly20-20)

---

*Originally published on nitendratech.com on 2018-05-28, updated 2024-02-18.*
