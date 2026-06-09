import "./App.css";
import { books } from "./book";
import Book from "./Book.jsx";
// const img = "./assets/hero.png";
function App() {
  return (
    <>
      <h1>amazon best sellers</h1>
      <BookList />
    </>
  );
}

function BookList() {
  return (
    <>
      <section className="booklist">
        {/* <EventExamples /> */}
        <h2>Here is book list</h2>
        {books.map((book, index) => {
          return <Book key={book.id} number={index} {...book} />;
        })}
      </section>
    </>
  );
}

// function EventExamples() {
//   function handleFormInput(e) {
//     // console.log("handle form input");
//   }
//   function handleButtonClick() {
//     alert("handle button clicked now");
//   }
//   function handleFormSubmisson(e) {
//     e.preventDefault();
//     console.log("submitted!!!!");
//   }
//   return (
//     <>
//       <section>
//         <form action="" onSubmit={handleFormSubmisson}>
//           <h2>Typical form</h2>

//           <input
//             type="text"
//             name="example"
//             onChange={handleFormInput}
//             style={{ margin: "1rem 0" }}
//           ></input>
//           <button onClick={handleButtonClick}>click me</button>
//         </form>{" "}
//       </section>
//     </>
//   );
// }

export default App;
