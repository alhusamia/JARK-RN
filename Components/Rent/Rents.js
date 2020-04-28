import React, { Component } from "react";
import { ImageBackground, View } from "react-native";
import {
  ListItem,
  Text,
  Body,
  Right,
  Button,
  Content,
  List,
} from "native-base";

// Screens
import { RENTDETAIL } from "../../Navigation/screenNames";

// Style
import styles from "./styles";
import { connect } from "react-redux";

class Rents extends Component {
  render() {
    const { navigation, listofrents } = this.props;
    const rents = listofrents.map((product) => (
      <ImageBackground
        source={{ uri: product.image }}
        style={styles.background}
        key={product.name + product.id}
      >
        <View style={styles.overlay} />
        <ListItem
          button
          style={styles.listitem}
          onPress={() => navigation.navigate(RENTDETAIL, { product })}
        >
          <Body>
            <Text style={styles.text}>{product.name}</Text>
          </Body>
          <Right>
            <Text style={styles.text1}>{product.owner}</Text>
          </Right>
        </ListItem>
      </ImageBackground>
    ));

    return (
      <Content>
        <List>{rents}</List>
      </Content>
    );
  }
}
const mapStateToProps = ({ listofrents }) => ({
  listofrents,
});
export default connect(mapStateToProps)(Rents);