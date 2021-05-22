import React from "react";
import AskQuestion from "./components/AskQuestion";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import "./components/Home.css";
import SearchResults from "./components/SearchResults";
import { BrowserRouter, Route } from "react-router-dom";
import AddAnswer from "./components/AddAnswer";
import Topic from "./components/Topics";
class App extends React.Component {
  state = {
    idCount: 42,
    questions: [
      {
        id: "Q1",
        title: "Is an array name a pointer?",
        topic: "C/CPP",
        description:
          "I saw somewhere that an array was called as a pointer. How?",
        date: "2021-04-29",
        answerIds: ["A7", "A8"],
      },
      {
        id: "Q2",
        title: "What is the purpose of creating static object in Java?",
        topic: "Java",
        description: "My code shows error if object isn't declared as static",
        date: "2021-05-02",
        answerIds: ["A9", "A10"],
      },
      {
        id: "Q3",
        title: "React-bootstrap not working",
        topic: "React",
        description:
          "My Reactjs app doesn't display bootstrap features even though I have installed react-bootstrap.",
        date: "2021-05-03",
        answerIds: ["A11", "A12", "A13"],
      },
      {
        id: "Q4",
        title: "How to check if string is in uppercase or lowercase in Python?",
        topic: "Python",
        description: "",
        date: "2021-05-05",
        answerIds: [],
      },
      {
        id: "Q5",
        title: "Is there an easier way to iterate through an array in JS?",
        topic: "Javascript",
        description:
          "How to iterate through the array without finding the length or array?",
        date: "2021-05-08",
        answerIds: ["A14", "A15"],
      },
      {
        id: "Q6",
        title: "How to extend from 2 classes in Java?",
        topic: "Java",
        description: "I want to extend from 2 classes  my code. How to do?",
        date: "2021-05-12",
        answerIds: ["A16", "A17", "A18", "A19"],
      },
      //...........
      {
        id: "Q7",
        title: "How do I compare strings in Java?",
        topic: "Java",
        description: "I've been using the == operator in my program to compare all my strings so far. However, I ran into a bug, changed one of them into .equals() instead, and it fixed the bug.",
        date: "2021-04-30",
        answerIds: ["A20"],
      },
      {
        id: "Q8",
        title: "Is Java 'pass-by-reference' or 'pass-by-value'? ",
        topic: "Java",
        description: "I always thought Java uses pass-by-reference.However, I've seen a couple of blog posts (for example, this blog) that claim that it isn't (the blog post says that Java uses pass-by-value).I don't think I understand the distinction they're making.What is the explanation?",
        date: "2021-05-04",
        answerIds: ["A21", "A22"],
      },
      {
        id: "Q9",
        title: "How can I remove a specific item from an array? ",
        topic: "Javascript",
        description: "I have an array of numbers and I'm using the .push() method to add elements to it.Is there a simple way to remove a specific element from an array?",
        date: "2021-05-15",
        answerIds: ["A23", "A24"],
      },
      {
        id: "Q10",
        title: "What are metaclasses in Python? ",
        topic: "Python",
        description: "In Python, what are metaclasses and what do we use them for?",
        date: "2021-05-11",
        answerIds: ["A25", "A26", "A27"],
      },
      {
        id: "Q11",
        title: "How do I check whether a file exists without exceptions?",
        topic: "Python",
        description: "How do I check whether a file exists or not, without using the try statement?",
        date: "2021-04-22",
        answerIds: ["A28", "A29", "A30"],
      },
      {
        id: "Q12",
        title: "What is the difference between public, protected, package-private and private in Java?",
        topic: "Java",
        description: "In Java, are there clear rules on when to use each of access modifiers, namely the default (package private), public, protected and private, while making class and interface and dealing with inheritance?",
        date: "2021-04-25",
        answerIds: ["A31", "A32"],
      },
      {
        id: "Q13",
        title: "What is the difference between “INNER JOIN” and “OUTER JOIN”?",
        topic: "SQL",
        description: "What actually is the difference between these joins?",
        date: "2021-04-26",
        answerIds: ["A33", "A34"],
      },
      {
        id: "Q14",
        title: "How do pointers to pointers work in C?",
        topic: "C/CPP",
        description: "Is it same as using two different pointers pointing to two different functions?",
        date: "2021-05-09",
        answerIds: ["A35", "A36"],
      },
      {
        id: "Q15",
        title: "What are database constraints?",
        topic: "SQL",
        description: "What is a clear definition of database constraint? Why are constraints important for a database? What are the types of constraints?",
        date: "2021-04-27",
        answerIds: ["A37", "A38", "A39", "A40", "A41"],
      },



    ],
    answers: [
      {
        id: "A7",
        questionId: "Q1",
        response:
          "An array is an array and a pointer is a pointer, but in most cases array names are converted to pointers.",
        date: "2021-05-01",
      },
      {
        id: "A8",
        questionId: "Q1",
        response:
          "An array name can be refferenced as a pointer to point to the address.",
        date: "2021-05-02",
      },
      {
        id: "A9",
        questionId: "Q2",
        response: "The static keyword in Java means that the variable or function is shared between all instances of that class, not the actual objects themselves.",
        date: "2021-05-05",
      },
      {
        id: "A10",
        questionId: "Q2",
        response:
          "You need to declare the object static in a static class/method",
        date: "2021-05-03",
      },
      {
        id: "A11",
        questionId: "Q3",
        response:
          "Make sure the bootstrap version is 4.6.0 in the package.json file. If not then, run 'npm install bootstrap@4.6.0'",
        date: "2021-05-03",
      },
      {
        id: "A12",
        questionId: "Q3",
        response:
          "Include import 'bootstrap/dist/css/bootstrap.min.css'; in your index.js file.",
        date: "2021-05-04",
      },
      {
        id: "A13",
        questionId: "Q3",
        response:
          "Point the react-bootstrap directory to the folder in node modules.",
        date: "2021-05-04",
      },
      {
        id: "A14",
        questionId: "Q5",
        response:
          "Use the for each loop. The forEach() method calls a function (a callback function) once for each array element.",
        date: "2021-05-09",
      },
      {
        id: "A15",
        questionId: "Q5",
        response: "Array.forEach() is a very useful method.",
        date: "2021-05-11",
      },
      {
        id: "A16",
        questionId: "Q6",
        response:
          "You can only Extend a single class. And implement Interfaces from many sources.",
        date: "2021-05-12",
      },
      {
        id: "A17",
        questionId: "Q6",
        response:
          "Extending multiple classes is not available. The only solution I can think of is not inheriting either class but instead having an internal variable of each class and doing more of a proxy by redirecting the requests to your object to the object that you want them to go to.",
        date: "2021-05-12",
      },
      {
        id: "A18",
        questionId: "Q6",
        response: "Use interfaces instead",
        date: "2021-05-17",
      },
      {
        id: "A19",
        questionId: "Q6",
        response:
          "If you have two classes from which you'd like to use code, you'd typically just subclass one (say class A). For class B, you abstract the important methods of it to an interface BInterface, then say Main extends A implements BInterface. Inside, you can instantiate an object of class B and implement all methods of BInterface by calling the corresponding functions of B.",
        date: "2021-05-21",
      },
      //.....
      {
        id: "A20",
        questionId: "Q7",
        response:
          " == tests for reference equality (whether they are the same object) whereas .equals() tests for value equality (whether they are logically equal).",
        date: "2021-05-02",
      },
      {
        id: "A21",
        questionId: "Q8",
        response:
          "Java is always pass-by-value. Unfortunately, when we deal with objects we are really dealing with object-handles called references which are passed-by-value as well. This terminology and semantics easily confuse many beginners.",
        date: "2021-05-06",
      },
      {
        id: "A22",
        questionId: "Q8",
        response:
          "Java always passes arguments by value, NOT by reference.",
        date: "2021-05-07",
      },
      {
        id: "A23",
        questionId: "Q9",
        response:
          "Find the index of the array element you want to remove using indexOf, and then remove that index with splice.",
        date: "2021-05-16",
      },
      {
        id: "A24",
        questionId: "Q9",
        response:
          "You can just create a function and remove items in series.",
        date: "2021-05-17",
      },
      {
        id: "A25",
        questionId: "Q10",
        response:
          "A metaclass is the class of a class. A class defines how an instance of the class (i.e. an object) behaves while a metaclass defines how a class behaves. A class is an instance of a metaclass.",
        date: "2021-05-13",
      },
      {
        id: "A26",
        questionId: "Q10",
        response:
          "Metaclasses are the 'stuff' that creates classes.You define classes in order to create objects, right? But we learned that Python classes are objects.Well, metaclasses are what create these objects.",
        date: "2021-05-17",
      },
      {
        id: "A27",
        questionId: "Q10",
        response:
          "The main purpose of a metaclass is to change the class automatically, when it's created. You usually do this for APIs, where you want to create classes matching the current context.",
        date: "2021-05-20",
      },
      {
        id: "A28",
        questionId: "Q11",
        response:
          "If the reason you're checking is so you can do something like if file_exists: open_it(), it's safer to use a try around the attempt to open it. Checking and then opening risks the file being deleted or moved or something between when you check and when you try to open it.",
        date: "2021-04-22",
      },
      {
        id: "A29",
        questionId: "Q11",
        response:
          "Use os.path.isfile() with os.access()",
        date: "2021-04-22",
      },
      {
        id: "A30",
        questionId: "Q11",
        response:
          "Do use try / except / else / finally blocks, because they can prevent you running into a series of nasty problems. A counter-example that I can think of, is performance: such blocks are costly, so try not to place them in code that it's supposed to run hundreds of thousands times per second (but since (in most cases) it involves disk access, it won't be the case).",
        date: "2021-04-23",
      },
      {
        id: "A31",
        questionId: "Q12",
        response:
          "private hides from other classes within the package. public exposes to classes outside the package. protected is a version of public restricted only to subclasses. ",
        date: "2021-04-27",
      },
      {
        id: "A32",
        questionId: "Q12",
        response:
          "Easy rule. Start with declaring everything private. And then progress towards the public as the needs arise and design warrants it.When exposing members ask yourself if you are exposing representation choices or abstraction choices. The first is something you want to avoid as it will introduce too many dependencies on the actual representation rather than on its observable behavior.As a general rule I try to avoid overriding method implementations by subclassing; it's too easy to screw up the logic. Declare abstract protected methods if you intend for it to be overridden. ",
        date: "2021-05-05",
      },
      {
        id: "A33",
        questionId: "Q13",
        response:
          "An inner join of A and B gives the result of A intersect B, i.e. the inner part of a Venn diagram intersection.An outer join of A and B gives the results of A union B, i.e. the outer parts of a Venn diagram union.",
        date: "2021-05-01",
      },
      {
        id: "A34",
        questionId: "Q13",
        response:
          " Inner join creates a new result table by combining column values of two tables (Employee and Location) based upon the join-predicate. n outer join does not require each record in the two joined tables to have a matching record. The joined table retains each record—even if no other matching record exists.",
        date: "2021-05-10",
      },
      {
        id: "A35",
        questionId: "Q14",
        response:
          " First a pointer is a variable, like any other variable, but that holds the address of a variable.A pointer to a pointer is a variable, like any other variable, but that holds the address of a variable. That variable just happens to be a pointer.",
        date: "2021-05-10",
      },
      {
        id: "A36",
        questionId: "Q14",
        response:
          " A pointer-to-a-pointer is used when a reference to a pointer is required. For example, when you wish to modify the value (address pointed to) of a pointer variable declared in a calling function's scope inside a called function.If you pass a single pointer in as an argument, you will be modifying local copies of the pointer, not the original pointer in the calling scope. With a pointer to a pointer, you modify the latter.",
        date: "2021-05-11",
      },
      {
        id: "A37",
        questionId: "Q15",
        response:
          "Constraints are part of a database schema definition. A constraint is usually associated with a table and is created with a CREATE CONSTRAINT or CREATE ASSERTION SQL statement.They define certain properties that data in a database must comply with. They can apply to a column, a whole table, more than one table or an entire schema. A reliable database system ensures that constraints hold at all times (except possibly inside a transaction, for so called deferred constraints).",
        date: "2021-04-27",
      },
      {
        id: "A38",
        questionId: "Q15",
        response:
          "Constraints are rules you create at design-time that protect your data from becoming corrupt. It is essential for the long time survival of your heart child of a database solution. Without constraints your solution will definitely decay with time and heavy usage.",
        date: "2021-04-28",
      },
      {
        id: "A39",
        questionId: "Q15",
        response:
          "Constraints are nothing but the rules on the data. What data is valid and what is invalid can be defined using constraints. So, that integrity of data can be maintained. ",
        date: "2021-04-30",
      },
      {
        id: "A40",
        questionId: "Q15",
        response:
          "Constraints dictate what values are valid for data in the database. For example, you can enforce the a value is not null (a NOT NULL constraint), or that it exists as a unique constraint in another table (a FOREIGN KEY constraint), or that it's unique within this table (a UNIQUE constraint or perhaps PRIMARY KEY constraint depending on your requirements). More general constraints can be implemented using CHECK constraints.",
        date: "2021-04-30",
      },
      {
        id: "A41",
        questionId: "Q15",
        response:
          "Constraints are conditions, that can validate specific condition. Constraints related with database are Domain integrity, Entity integrity, Referential Integrity, User Defined Integrity constraints etc.",
        date: "2021-05-05",
      },
    ],
  };
  generateUniqueId(prefix) {
    const idCount = this.state.idCount;
    this.setState({ idCount: idCount + 1 });
    return `${prefix}${this.state.idCount}`;
  }
  addQuestion = ({ title, topic, description }) => {
    const id = this.generateUniqueId("Q");
    this.setState((prevState) => ({
      questions: [
        ...prevState.questions,
        {
          id: id,
          title,
          topic,
          description,
          date: new Date().toJSON().slice(0, 10),
          answerIds: [],
        },
      ],
    }));
  };
  addAnswer = (ans, questionId) => {
    const id = this.generateUniqueId("A");
    let questions = this.state.questions;
    questions.forEach((ques) => {
      if (ques.id === questionId) {
        ques.answerIds.push(id);
      }
    });
    this.setState((prevState) => ({
      answers: [
        ...prevState.answers,
        {
          id: id,
          questionId,
          response: ans,
          date: new Date().toJSON().slice(0, 10),
        },
      ],
    }));
  };

  render() {
    return (
      <>
      <div id="mainpage">
        <BrowserRouter>

          <NavBar setSearchTerm={this.setSearchTerm} />
          <Route path="/" exact render={() => <Home data={this.state} />} />
          <Route
            path="/askquestion"
            render={() => <AskQuestion onSubmit={this.addQuestion} />}
          />
          <Route
            path="/search"
            render={(props) => (
              <SearchResults questions={this.state.questions} {...props} />
            )}
          />
          <Route
            path="/answerpage"
            render={(props) => (
              <AddAnswer
                data={this.state}
                {...props}
                addAnswer={this.addAnswer}
              />
            )}
          />
          <Route
            path="/topics"
            render={(props) => (
              <Topic questions={this.state.questions} {...props} />
            )}
          />

        </BrowserRouter>
        </div>
      </>
    );
  }
}
export default App;
