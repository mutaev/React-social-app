import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";

import { Post } from "../components/Post";
import { TagsBlock } from "../components/TagsBlock";
import { CommentsBlock } from "../components/CommentsBlock";

export const Home = () => {
  return (
    <>
      <Tabs
        style={{ marginBottom: 15 }}
        value={0}
        aria-label="basic tabs example"
      >
        <Tab label="Новые" />
        <Tab label="Популярные" />
      </Tabs>
      <Grid container spacing={4}>
        <Grid xs={8} item>
          {[...Array(5)].map(() => (
            <Post
              id={1}
              title="Ваз 2106 | В 2022 году"
              imageUrl="https://bipbap.ru/wp-content/uploads/2018/08/59b10fcs-960-640x360.jpg"
              user={{
                avatarUrl:
                  "https://www.qars-bmw.ru/photo/img/bmv-e34-chernaia-foto-2.jpg",
                fullName: "Мутаев Эльдар",
              }}
              createdAt={"12 ноября 2022 г."}
              viewsCount={150}
              commentsCount={3}
              tags={["Автомобили"]}
              isEditable
            />
          ))}
        </Grid>
        <Grid xs={4} item>
          <TagsBlock
            items={["Новости", "Автомобили", "IT news"]}
            isLoading={false}
          />
          <CommentsBlock
            items={[
              {
                user: {
                  fullName: "Эльдар Мутаев",
                  avatarUrl:
                    "https://www.qars-bmw.ru/photo/img/bmv-e34-chernaia-foto-2.jpg",
                },
                text: "В сети",
              },
              {
                user: {
                  fullName: "Илон Маск",
                  avatarUrl:
                    "data:image/jpeg;base64,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",
                },
                text: "В сети",
              },
            ]}
            isLoading={false}
          />
        </Grid>
      </Grid>
    </>
  );
};
