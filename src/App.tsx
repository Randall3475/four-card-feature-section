import CalculatorIcon from './components/CalculatorIcon';
import KarmaIcon from './components/KarmaIcon';
import SupervisorIcon from './components/SupervisorIcon';
import TeamBuilderIcon from './components/TeamBuilderIcon';

export default function App() {
  return (
    <>
      <header className="px-8 text-center pb-8 pt-16">
        <div className="text-ntl-very-dark-blue">
          <p className="font-light sm:text-4xl text-2xl">
            Reliable, efficient delivery
          </p>
          <h1 className="font-bold sm:text-4xl text-2xl">
            Powered by Technology
          </h1>
          <p className="text-sm text-ntl-grayish-blue sm:m-auto sm:max-w-[36rem] px-4 pt-4">
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </div>
      </header>
      <main className="px-8 pt-8 pb-16">
        <section className="md:max-w-[66rem] md:m-auto flex md:flex-row flex-col sm:gap-x-6 gap-y-6">
          <div className="flex md:items-center justify-center">
            <div className="grid lg:gap-y-14 gap-y-10 rounded-lg shadow-lg px-6 py-4 border-t-4 border-t-pry-cyan">
              <div className="grid gap-y-2">
                <h2 className="font-bold text-ntl-very-dark-blue text-lg">
                  Supervisor
                </h2>
                <p className="text-[13px] text-ntl-grayish-blue">
                  Monitors activity to indentify proejct roadblocks
                </p>
              </div>
              <div className="flex justify-end">
                <SupervisorIcon />
              </div>
            </div>
          </div>
          <div className="md:grid gap-y-6 sm:gap-x-6 flex sm:flex-row flex-col items-center">
            <div className="grid lg:gap-y-14 gap-y-10 rounded-lg shadow-lg px-6 py-4 border-t-4 border-t-pry-red">
              <div className="grid gap-y-2">
                <h2 className="font-bold text-ntl-very-dark-blue text-lg">
                  Team Builder
                </h2>
                <p className="text-[13px] text-ntl-grayish-blue">
                  Monitors activity to indentify proejct roadblocks
                </p>
              </div>
              <div className="flex justify-end">
                <TeamBuilderIcon />
              </div>
            </div>
            <div className="grid lg:gap-y-14 gap-y-10 rounded-lg shadow-lg px-6 py-4 border-t-4 border-t-pry-orange">
              <div className="grid gap-y-2">
                <h2 className="font-bold text-ntl-very-dark-blue text-lg">
                  Karma
                </h2>
                <p className="text-[13px] text-ntl-grayish-blue">
                  Monitors activity to indentify proejct roadblocks
                </p>
              </div>
              <div className="flex justify-end">
                <KarmaIcon />
              </div>
            </div>
          </div>
          <div className="flex md:items-center justify-center">
            <div className="grid lg:gap-y-14 gap-y-10 rounded-lg shadow-lg px-6 py-4 border-t-4 border-t-pry-blue">
              <div className="grid gap-y-2">
                <h2 className="font-bold text-ntl-very-dark-blue text-lg">
                  Calculator
                </h2>
                <p className="text-[13px] text-ntl-grayish-blue">
                  Monitors activity to indentify proejct roadblocks
                </p>
              </div>
              <div className="flex justify-end">
                <CalculatorIcon />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
