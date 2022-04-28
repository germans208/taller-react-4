import { useMemo, useState } from "react";

const elements = [1, 0, 3, 1, 5];

const mapElements = (score: number[], caller: string) => {
  console.log("Calculo num", caller);

  return score.map((num, index) => {
    const calc = (num * 3) / 2;
    const color = calc < 3 ? "🔴" : "🔵";

    return (
      <p key={index}>
        {calc} {color}
      </p>
    );
  });
};

const UseMemoBasic: React.FC = () => {
  const [rerender, setRerender] = useState<boolean>(false);

  const getElements = mapElements(elements, "sin-memo");
  const getElementsMemo = useMemo(() => {
    return mapElements(elements, "con-memo");
  }, []);

  return (
    <div>

      <h3>Con Memo</h3>
      {getElements}
      
      <h3>Sin Memo</h3>
      {getElementsMemo}

      <button type="button" onClick={() => setRerender(!rerender)}>
        Re render
      </button>
    </div>
  );
};

export default UseMemoBasic;
