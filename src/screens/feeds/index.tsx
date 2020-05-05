import * as React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

interface IProps {}

interface IPosts {
  id: string;
  author: string;
  pictureUrl: string;
  likes: number;
  descriptions: string;
  hashtags: string;
  place: string;
}

const Posts: IPosts[] = [
  {
    author: "Eric Silva",
    descriptions: "Dest",
    hashtags: "#",
    likes: 4,
    id: "egthxdty56",
    pictureUrl: "http:// . . .",
    place: "Cinema",
  },
];

function renderItem(post: IPosts) {
  return (
    <View>
      <View style={styles.postHeader}>
        <View style={styles.UserInfo}>
          <Text style={styles.Author}>{post.author}</Text>
          <Text style={styles.Place}>{post.place}</Text>
        </View>
        <View style={styles.PostOptions}></View>
      </View>
    </View>
  );
}

const Feed: React.FC<IProps> = (props) => {
  return (
    <React.Fragment>
      <View>
        <FlatList
          data={Posts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => renderItem(item)}
        ></FlatList>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  postHeader: {},
  UserInfo: {},
  PostOptions: {},
  Author: {
    fontSize: 14,
    color: "#000",
    fontWeight: "bold",
  },
  Place: {},
});

export default Feed;
