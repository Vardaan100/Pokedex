import React, { useEffect, useState } from "react";
import { Table, Space } from "antd";
import "antd/dist/antd.css";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([
    {
      name: "",
      url: "",
    },
  ]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((response) => response.json())
      .then((data) => setPokemon(data.results));
  }, []);
  console.log(pokemon);

  const { Column } = Table;

  let data = [];
  return (
    <Table dataSource={pokemon}>
      <Column title="Name" dataIndex="name" key="name" />
      <Column
        title="Action"
        key="action"
        render={(text, record) => (
          <Space size="middle">
            <a>View</a>
          </Space>
        )}
      />
    </Table>
  );
};

export default Pokemon;
