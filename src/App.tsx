import { Header } from "./component/Header";
import { About } from "./blocks/About";
import { Promotion } from "./blocks/Promotion";
import { Plans } from "./blocks/Plans";
import { Project } from "./blocks/Project";
import { Banner } from "./blocks/Banner";
import { FormRequest } from "./blocks/FormRequest";
import { Footer } from "./component/Footer";
import { Map } from "./blocks/Map";
import { ModalForm } from "./component/Modal";

function App() {

  return (
    <div>
      <Header />
      <main className="flex-1">
        <Banner />
        <About />
        <Project />
        <div className="mt-10 w-[98%] m-auto xl:w-[1200px] rounded-2xl bg-zinc-800 px-4 py-8">
          <Plans />
        </div>
        <Promotion />
        <div className="mt-10 rounded-2xl w-[98%] m-auto xl:w-[1200px] bg-zinc-800 px-[15px] sm:px-20 py-8">
          <FormRequest />
        </div>
        <Map />
      </main>
      <div className="mt-10 rounded-2xl bg-zinc-800 w-[98%] m-auto xl:w-[1200px] px-[15px] sm:px-20 py-8">
        <Footer />
      </div>
      <ModalForm />
    </div>
  );
}

export default App;
