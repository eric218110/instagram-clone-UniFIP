import * as React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
// import * as options from "../../../assets/options";
const options = require("../../../assets/options.png");
const like = require("../../../assets/like.png");
const comment = require("../../../assets/comment.png");
const send = require("../../../assets/send.png");
const save = require("../../../assets/save.png");

interface IProps {}

//
//
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
    descriptions: "My dog, my life",
    hashtags: "#Dog #love",
    likes: 4,
    id: "srge4t34tw4t3",
    pictureUrl: "https://i.picsum.photos/id/237/200/300.jpg",
    place: "Dog",
  },
  {
    author: "Eric Silva",
    descriptions: "My dog, my life",
    hashtags: "#Dog #love",
    likes: 4,
    id: "rg4gwrgwrg",
    pictureUrl: "https://picsum.photos/id/870/200/300?grayscale&blur=2",
    place: "Dog",
  },
  {
    author: "Eric Silva",
    descriptions: "My dog, my life",
    hashtags: "#Dog #love",
    likes: 4,
    id: "qefwg24gg3",
    pictureUrl: "https://picsum.photos/200/300?grayscale",
    place: "Dog",
  },
  {
    author: "Eric Silva",
    descriptions: "My dog, my life",
    hashtags: "#Paradise #love",
    likes: 4,
    id: "o4kwjpjfojpwjp",
    pictureUrl: "https://picsum.photos/seed/picsum/200/300",
    place: "Dog",
  },
];

function renderItem(post: IPosts) {
  return (
    <View style={styles.Container}>
      <View style={styles.postHeader}>
        <View style={styles.UserInfo}>
          <Text style={styles.Author}>{post.author}</Text>
          <Text style={styles.Place}>{post.place}</Text>
        </View>
        <View style={styles.PostOptions}>
          <TouchableOpacity>
            <Image source={options}></Image>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Image
          source={{ uri: post.pictureUrl }}
          style={styles.ImageUrl}
        ></Image>
      </View>
      <View style={styles.Footer}>
        <View style={styles.Actions}>
          <View style={styles.ActionLeft}>
            <TouchableOpacity style={styles.Action}>
              <Image source={like}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Action}>
              <Image source={comment}></Image>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={send}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.ActionRight}>
            <TouchableOpacity style={styles.Action}>
              <Image source={save}></Image>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={styles.Likes}>{post.likes} likes</Text>
          <Text style={styles.HashTags}>{post.hashtags}</Text>
          <Text style={styles.Description}>{post.descriptions}</Text>
        </View>
      </View>
    </View>
  );
}

const Feed: React.FC<IProps> = (props) => {
  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={Posts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => renderItem(item)}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    marginVertical: 15,
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    alignItems: "center",
    marginBottom: 10,
  },
  UserInfo: {},
  PostOptions: {},
  Author: {
    fontSize: 14,
    color: "#000",
    fontWeight: "bold",
  },
  Place: {
    fontSize: 12,
    color: "#666",
  },
  ImageUrl: {
    width: "100%",
    height: 400,
  },
  Footer: {
    paddingHorizontal: 15,
  },
  Actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
  },
  ActionLeft: {
    flexDirection: "row",
  },
  ActionRight: {},
  Action: {
    marginRight: 8,
  },
  Likes: {
    fontWeight: "bold",
    fontSize: 12,
  },
  Description: {
    color: "#000",
    lineHeight: 20,
  },
  HashTags: {
    color: "#002D5E",
    fontWeight: "bold",
  },
});

export default Feed;
