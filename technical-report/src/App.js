import './App.css';

function App() {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
        <meta name="description" content="UI Components Smart Generator" />
        <meta name="keywords" content="project, infoiasi, wade, web" />
        <meta name="author" content="Andrei Curca, Ioana Maniga, Octavian-Paul Ungureanu" />
        <title>Scholarly HTML</title>
        <link rel="stylesheet" href="css/scholarly.min.css" />
        <script src="js/scholarly.min.js"></script>
      </head>
      <body>
        <header>
          <h1>UI Components Smart Generator</h1>
        </header>
        <div role="contentinfo">
          <ol role="directory">
            <li><a href='#abstract'>1. Abstract</a></li>
            <li><a href='#introduction'>2. Introduction</a></li>
            <li>
              <a href='#structure'>3. Structure</a>
              <ol role="directory">
                <li><a href='#front-end'>3.1 UICS Web Site</a></li>
                <li>
                  <a href='#back-end'>3.2 UICS Backend</a>
                  <ol role="directory">
                    <li><a href='#api'>3.2.1 API System</a></li>
                    <li><a href='#interpreter'>3.2.2 Text Interpreter</a></li>
                    <li><a href='#storage'>3.2.3 Storage Unit</a></li>
                  </ol>
                </li>
              </ol>
            </li>
            <li><a href='#data'>4. Data Models</a></li>
          </ol>
          <dl>
            <dt>Authors</dt>
            <dd>
              <ul>
                <li>Andrei Curca</li>
                <li>Ioana Maniga</li>
                <li>Octavian-Paul Ungureanu</li>
              </ul>
            </dd>
          </dl>
        </div>
        <section typeof="sa:Abstract" id="abstract" role="doc-abstract">
          <h2>Abstract</h2>
          <p>
            UI Components Smart Generator (UICS) is a web application that allows users to create interface elements by
            typing simple controlled language constructs. It works with an OWL-based antology that suggests and generate – via
            a SPARQL end-point – the proper controls for various Web interfaces.
          </p>
        </section>
        <section id="introduction" role="doc-introduction">
          <h2>Introduction</h2>
          <p>Our project is designed to be used by people that have lower level of experience in coding but need to create simple components with specific layout. Users can use a set of rules and commands that allow them to specify how the elements should be placed in the UI component that they create. More than that, they can also download the html source code of their layouts and use it in their own projects. This feature also helps them learn how to code better since the content provided is an exact translation of the text description ptterns they use into htm code.</p>
          <p>The users have also permanent access to every component that they created in case they want to reuse them.</p>
        </section>
        <section id="structure">
          <h2>Structure</h2>
          <p>
            Our project is composed of the following modules and components:
          </p>
          <section id="front-end">
            <h3>UICS Web Site</h3>
            <p>This component represents the front-end module of our project. It is developed in react and lets the users interact with all the features of the application. The main pages users can access are:</p>
            <ol>
              <li>
                <div class="secondary-list-item">
                  <span class="secondary-list-title">Log In</span>
                  <span>This page will let the users log in to their account if they have one. Otherwise, there is the option to create a new account.</span>
                </div>
              </li>
              <li>
                <div class="secondary-list-item">
                  <span class="secondary-list-title">Code Generator</span>
                  <span>On this page the users can write commands in a text input to generate UI components that will be displayed and modify at every command submit. The submit button is placed near the text input and the result component is displayed above the text input.</span>
                  <span>There is also a text field to name the component and a download button that allows users to download the code.</span>
                </div>
              </li>
              <li>
                <div class="secondary-list-item">
                  <span class="secondary-list-title">Helper</span>
                  <span>This is the page where users can read the guidline and find out the accepted commands that they can use for creating new layouts. There will also be details about the default values in elements styles in case they are not specified when creating the component.</span>
                </div>
              </li>
              <li>
                <div class="secondary-list-item">
                  <span class="secondary-list-title">History</span>
                  <span>Here is displayed a list of components that an user created on this Web Site. The user can see and download each one of these components.</span>
                </div>
              </li>
            </ol>
            <p>The user is also able to see the menu of the application that is displayed on every page and ensures the navigation between pages and the log out option.</p>
          </section>
          <section id="back-end">
            <h3>UICS Backend</h3>
            <p>
              The backend of our project is developed in python and is structured on the following components:
            </p>
            <section id="api">
              <h4>API System</h4>
              <ol>
                <li>
                  <div class="secondary-list-item">
                    <span class="secondary-list-title">Authentication</span>
                    <span>This module contains "log in" and "create account" features.</span>
                  </div>
                </li>
                <li>
                  <div class="secondary-list-item">
                    <span class="secondary-list-title">Component Generator</span>
                    <span>This module is responsible with generating and returning html code based on text description commands given by users.</span>
                  </div>
                </li>
                <li>
                  <div class="secondary-list-item">
                    <span class="secondary-list-title">Download Manager</span>
                    <span>This module handles the download requests.</span>
                  </div>
                </li>
                <li>
                  <div class="secondary-list-item">
                    <span class="secondary-list-title">Helper Manager</span>
                    <span>This module provides the set of rules and specifications that are displayed on the helper page.</span>
                  </div>
                </li>
                <li>
                  <div class="secondary-list-item">
                    <span class="secondary-list-title">Components History</span>
                    <span>This module is responsible with the list of all components that a user has created on our application.</span>
                  </div>
                </li>
              </ol>
            </section>
            <section id="interpreter">
              <h4>Text Interpreter</h4>
              <p>The text interpreter handles the core function of our application: receiving description text for components and processing it to generate correct html code.</p>
            </section>
            <section id="storage">
              <h4>Storage Unit</h4>
              <p>This is used to store user data such as personal details and the components that they created on our web site. This unit also stores all the specific words and phrasal structures that can be used for generating UI components.</p>
            </section>
          </section>
          <div id="diagram-container">
            <img src={require("./assets/C4.png")} alt={"Project structure diagram"} width="500px" />
          </div>
        </section>
        <section id="data">
          <h2>Data Models</h2>
          <p></p>
        </section>
      </body>
    </html>
  );
}

export default App;
