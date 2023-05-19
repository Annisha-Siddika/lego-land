
const Blog = () => {
    return (
        <div className="container bg-yellow-50 mx-auto px-4 pt-44 pb-12">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-4xl text-pink-500 font-bold py-6">Welcome to the Blog!</h1>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">What is an access token and refresh token?</h2>
                    <p>
                        An access token is a credential used to authenticate and authorize a client to access protected resources.
                        It is usually short-lived and contains information about the clients permissions and identity.
                        On the other hand, a refresh token is a long-lived token used to obtain new access tokens once the previous one expires.
                        Refresh tokens are securely stored and only exchanged with the authorization server to get a new access token.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">Compare SQL and NoSQL databases?</h2>
                    <p>
                        SQL databases are based on structured query language and use tables to store data with predefined schemas.
                        They are good for complex queries and maintaining relationships between tables.
                        NoSQL databases, on the other hand, are schema-less and store data in flexible formats like documents, key-value pairs, or graphs.
                        They are suitable for handling large amounts of unstructured or semi-structured data and provide high scalability and performance.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">What is Express.js? What is Nest.js?</h2>
                    <p>
                        Express.js is a popular web application framework for Node.js.
                        It provides a simple and minimalist approach to build web servers and APIs.
                        Express.js is highly flexible and widely used in the Node.js ecosystem.
                        On the other hand, Nest.js is a progressive TypeScript-based framework for building efficient and scalable server-side applications.
                        It combines elements of object-oriented programming, functional programming, and reactive programming to provide a robust architecture for Node.js applications.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-2">What is MongoDB aggregate and how does it work?</h2>
                    <p>
                        MongoDB aggregate is a powerful framework for performing data aggregation operations on collections.
                        It allows you to process and transform data using a pipeline of stages.
                        Each stage performs a specific operation on the input documents and passes the result to the next stage.
                        With the aggregate framework, you can perform tasks like filtering, grouping, sorting, joining, and calculating aggregate values.
                        It provides a flexible and efficient way to perform complex data manipulations within the MongoDB database.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
