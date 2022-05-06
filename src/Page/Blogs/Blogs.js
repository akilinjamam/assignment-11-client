import React from 'react';

const Blogs = () => {
    return (
        <div>
            <br />
            <h1 className='text-danger'>BLOGS</h1>
            <br />
            <div className='w-75 border border-dark p-4 rounded text-start mx-auto'>
                <h2 className='text-primary'>Difference between javascript and node.js</h2>
                <h5>

                    JavaScript  follows Java Programming language standard. There is some different way of writing code, but at the same time, we can say it following the Java Programming language standard. on the other hand, node JS is written in C++ and provides a V8 engine base browser javascript running engine, it helps us run a written javascript program in any browser environment.
                    <br />  <br />
                    JavaScript running in any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome). So JavaScript programming is very easy to write, and put any running environment means proper browser. Whereas Node JS only support the V8 engine, which googles chrome specific. But whether it supports the V8 engine, written JavaScript code can able to run in any environment. So there has no browser-specific constraint on it.
                    <br />  <br />
                    JavaScript is a  programming language that can run in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.




                </h5>

                <h2 className='text-primary'> When should you use nodejs and when should you use mongodb?</h2>

                <h5>
                    we can say, NodeJS is a JavaScript runtime environment. It's actually helps JavaScript to run outside of server. It's used in server side development.
                    Nodejs is a Javascript engine that you can write any application you want with (by programming in the Javascript language). It runs your Javascript code. Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++, Go, etc...
                    <br /> <br />
                    But, MongoDB is NoSQL database which is document oriented. It represents data as of JSON documents. It's used for store data.MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database. There are dozens of popular databases. MongoDB is one such database. MariaDB, MySql, CouchDB, DynamoDB (on AWS), Postgres are examples of other databases
                    <br /><br />

                </h5>

                <h2 className='text-primary'>Differences between sql and nosql databases.</h2>

                <h5>
                    Databases are categorized as Relational Database Management System (RDBMS).
                    <br />
                    NoSQL databases are categorized as Non-relational or distributed database system.
                    <br /><br />
                    SQL databases display data in form of tables so it is known as table-based database.
                    <br />
                    NoSQL databases display data as collection of key-value pair, documents, graph databases or wide-column stores.
                    <br /><br />
                    SQL databases are vertically scalable.
                    <br />
                    NoSQL databases are horizontally scalable.
                    <br /><br />
                    SQL databases use a powerful language "Structured Query Language" to define and manipulate the data.
                    <br />
                    In NoSQL databases, collection of documents are used to query the data. It is also called unstructured query language. It varies from database to database.
                    <br /><br />
                    SQL databases have fixed or static or predefined schema.
                    <br />
                    NoSQL databases have dynamic schema.
                    <br /><br />
                    SQL databases are not best suited for hierarchical data storage.
                    <br />
                    NoSQL databases are best suited for hierarchical data storage.
                    <br /><br />
                </h5>

            </div>
        </div>
    );
};

export default Blogs;