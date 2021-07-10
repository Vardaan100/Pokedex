import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Space } from "antd";
import "antd/dist/antd.css";
import { GetPokemonList } from "../redux/actions/index";
import { POKEMON_URL } from "../redux/constants/index";
import { Link } from "react-router-dom";

const Pokemon = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.pokemon_list.results);

  useEffect(() => {
    dispatch(GetPokemonList());
  }, []);

  const { Column } = Table;

  return (
    <Table dataSource={data}>
      <Column title="Name" dataIndex="name" key="name" />
      <Column
        title="Action"
        key="url"
        render={(text, record) => (
          <Space size="middle">
            <Link to="Pro">
              <a
                onClick={() => {
                  dispatch({
                    type: POKEMON_URL,
                    payload: record.url,
                  });
                }}
              >
                View
              </a>
            </Link>
          </Space>
        )}
      />
    </Table>
  );
};

export default Pokemon;
