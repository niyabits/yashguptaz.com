---
title: Quality Server-Side Rendering with React 
date: "2019-12-22T13:15:03.284Z"
description: "Server Side Rendering or SSR is a hot topic in the React community, learn about how does SSR actually works."
---

Server-side rendering is a term that we often hear in the react world, there are a lot of frameworks that help us with server-side rendering like Next.js and Gatsby. Server-side rendering can add various additional improvements to our application but at the same time complicate things even more. There are situations where it is useful and other situations where it can cause trouble.

When I first heard the term server-side rendering I thought it had something to do with the backend of the application, but it turned out it was something totally different than that.

We will start by comparing how does loading and rendering a website differ in the client-side rendering and server-side rendering.

### Loading Application while Client-Side Rendering it
1. JavaScript, CSS, and other Libraries are loaded.
2. ReactDOM.render() starts.
3. Fetching of data is started and requests are sent, the application gets the data from external APIs.
4. *The whole Virtual DOM is created. It gets reconciled with the real DOM. React traverses the whole Virtual DOM and renders it to the real DOM.*

The issue with client-side rendering is that this process takes a very long time. That's where server-side rendering comes in to play.

In server-side-rendering instead of initially creating the Virtual DOM, we send an HTML element initially rendered instead. This is  usually done by [ReactDOMServer.renderToString()](https://reactjs.org/docs/react-dom-server.html#rendertostring) method.

We avoid the process of loading the Virtual DOM and reconciling it with the real DOM instead we put HTML directly into our DOM with server-side rendering.

Although there are few things that we can do to optimize the performance of a client-side rendered application.

### Optimizing Client-side rendered application
1. Load the layout or the skeleton part first.
2. Cache the skeleton part with service workers.
3. Show a certain part of the layout even if the majority part of the layout is dynamically added like the top navbar which has a login button.
4. You can avoid loading the dynamic parts of the application initially.

For the sake of user experience please always load the skeleton first, if the height or width is not fixed with the element please load it at the last.

When using Twitter to search users it always shifts the user being displayed below after it completely loads and whenever I am about to click I click the wrong place.

This is a terrible practice and should be avoided.

### Dependencies are better pre-loaded with Server Side Rendering
Say we use some dependency A in our application using which triggers the fetch of dependency B.

With client-side rendering, one has to fetch dependency A and then B which is slow.

With server-side rendering, you can present your application with dependency A and avoid fetching an extra dependency.

### Better SEO with Server Side Rendering
Server-Side Rendering makes crawlers easy to crawl pages. Google indexes the page with HTML faster than those with JavaScript rendering DOM elements. 

This is because people can easily trick google having a lot of text with JavaScript but in actuality, when they render the page they have a very little amount of relevant text which can also be used to mislead people. So indexing pages that render with the help of JavaScript is tricky which is why people use Server Side Rendering for better SEO.

### Trade-offs of Server-Side Rendering
- Maintainability Nightmare: You need to maintain 2 DOM trees.
- Some libraries are not aware of server-side rendering so they make an assumption about the presence of window objects which can sometimes, make the library unusable.
- The complexity starts to increase exponentially with a server-side rendered application as they don't have access to the window object, things like local storage are not present so complexity increases with data and state management.
- React itself is not very server-side compatible.
- Time-to-interaction is very high with server-side rendering. This is because HTML is loaded faster than JavaScript. So there might be cases where user is unable to click a button when it is loaded.

Server-side rendering is best suited for parts of the application that do not require dynamic interactions.

Thanks to [Sudhanshu Yadav.](https://twitter.com/_syadav) He helped me with much of the content of the blog. Please do follow him on Twitter.

If you have any opportunities for me or want to connect to me with [Twitter,](https://twitter.com/yashguptaz) I am @yashguptaz on the internet.

Thanks for Reading.