import React from "react";

const Blog = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <div className="card  mb-3" style={{ maxWidth: "24rem" }}>
            <div className="card-header">what is cors ?</div>
            <div className="card-body">
              <p className="card-text">
                Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate
                any origins (domain, scheme, or port) other than its own from which a browser should permit loading
                resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server
                hosting the cross-origin resource, in order to check that the server will permit the actual request. In
                that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in
                the actual request.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="card  mb-3" style={{ maxWidth: "24rem" }}>
            <div className="card-header">
              Why are you using firebase ? What other option do you have to implement authentication ?
            </div>
            <div className="card-body">
              <p className="card-text">
                Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to
                authenticate users to your app. It supports authentication using passwords, phone numbers, popular
                federated identity providers like Google, Facebook and Twitter, and more. Firebase Authentication
                integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and
                OpenID Connect, so it can be easily integrated with your custom backend.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="card  mb-3" style={{ maxWidth: "24rem" }}>
            <div className="card-header">How does the private route work ?</div>
            <div className="card-body">
              <p className="card-text">
                Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In
                simple words, These routes can be accessed only after login. The constraints for Public and Private
                routes are that Public routes should not be accessed after login and Private routes should not be
                accessible before login. In this article, we can see. How to create public and private routes using
                react-router for your react apps. Let's start
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="card  mb-3" style={{ maxWidth: "24rem" }}>
            <div className="card-header">What is node ? How does node work ?</div>
            <div className="card-body">
              <p className="card-text">
                Node.js is an open-source backend javascript runtime environment. It is a used as backend service where
                javascript works on the server-side of the application. This way javascript is used on both frontend and
                backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly
                scalable, lightweight, fast, and data-intensive. Working of Node.js: Node.js accepts the request from
                the clients and sends the response, while working with the request node.js handles them with a single
                thread. To operate I/O operations or requests node.js use the concept of threads.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
