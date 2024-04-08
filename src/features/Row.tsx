import { Input } from "@chakra-ui/react";

import MyMenu from "./Menu";

type Props = {
  span: string;
  types: string[];
};

const Row = ({ span, types }: Props) => {
  return (
    <div className="row">
      <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {span}

        <img
          width="15"
          height="15"
          src="https://img.icons8.com/flat-round/64/question-mark.png"
          alt="question-mark"
        />
      </span>
      <Input bg="#f2f2f2" type="number" placeholder="Amount" />
      <MyMenu types={types} />
    </div>
  );
};

export default Row;
