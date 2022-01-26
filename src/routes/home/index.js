import style from "./style.css";
import TodosTable from "./Table";

/**
 * Home Page Component Body
 */

const Home = () => (
  <div class={style.home}>
    <h1>Home</h1>
    <TodosTable />
  </div>
);

export default Home;
