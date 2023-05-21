import React from "react";
import useTitle from "../../hooks/useTitle";

const Blogs = () => {
  useTitle("Blogs");

  return (
    <div className="my-36 px-7 lg:px-16">
      <h2 className="text-5xl font-bold text-center">
        Blog Question & <span className="text-[#F79837]">Answer</span>
      </h2>
      <div className="mt-16 w-1/2 mx-auto">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 mb-6  rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </div>
          <div className="collapse-content">
            <p>
              A refresh token just helps us re-validate a user without them
              having to re-enter their login credentials multiple times. When
              the access token expires, the client can make a request to the
              authentication server with the refresh token to obtain a new
              access token without requiring the user to re-authenticate. The
              server verifies the refresh token, and if it's valid, issues a new
              access token.
              <br /> <br />
              We can store them in Cookies, Local Storage and Session Storage.
              When storing tokens on the client-side, it's crucial to consider
              security measures to protect them from unauthorized access.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 mb-6  rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Compare SQL and NoSQL databases?
          </div>
          <div className="collapse-content">
            <p>
              SQL databases are table-based, while NoSQL databases are document,
              key-value, graph, or wide-column stores. SQL databases are better
              for multi-row transactions, while NoSQL is better for unstructured
              data like documents or JSON.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 mb-6  rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is express js? What is Nest JS?
          </div>
          <div className="collapse-content">
            <p>
              Express is a minimalist and flexible framework that is easy to use
              and has a large community of developers. NestJS, on the other
              hand, is a newer framework that provides additional features such
              as dependency injection, a modular architecture, and an intuitive
              CLI.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 mb-6  rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is MongoDB aggregate and how does it work?
          </div>
          <div className="collapse-content">
            <p>
              Aggregation is a way of processing a large number of documents in
              a collection by means of passing them through different stages. In
              MongoDB, It allows us to process and transform data from multiple
              documents within a collection, providing capabilities for
              grouping, filtering, sorting, projecting, and performing various
              computations on the data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
