import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const Home = () => {
  return (
    <View style={styles.home}>
      <View style={styles.header}>
        <View style={{ flexDirection: "row", columnGap: 12 }}>
          <Image
            source={require("../assets/favicon.png")}
            style={{ width: 40, resizeMode: "contain", height: 40 }}
          />
          <View>
            <Text
              style={{
                fontFamily: "NotoSans-Bold",
                fontSize: 10,
                letterSpacing: 0.5,
                marginBottom: -8,
              }}>
              LEVEL
            </Text>
            <Text
              style={{
                fontFamily: "NotoSans-Bold",
                fontSize: 18,
                letterSpacing: 0.6,
              }}>
              FITNESS
            </Text>
          </View>
        </View>
        <Image
          source={require("../assets/Images/Home/user.png")}
          style={{ width: 40, resizeMode: "contain", height: 40 }}
        />
      </View>

      <View style={styles.body}>
        <Text
          style={{
            fontSize: 35,
            fontFamily: "NotoSans-Medium",
          }}>
          Hi, Akash 👋
        </Text>

        <View style={styles.inputBox}>
          <View style={styles.input}>
            <Image
              source={require("../assets/Images/Home/search.png")}
              style={{ width: 20, resizeMode: "contain", height: 20 }}
            />
            <TextInput
              placeholder="Search"
              style={{
                fontFamily: "Ubuntu-Medium",
                flex: 1,
              }}></TextInput>
          </View>
          <TouchableOpacity>
            <Image
              source={require("../assets/Images/Home/next.png")}
              style={{ width: 46, height: 46 }}
            />
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 38 }}>
          <Text style={styles.titleText}>Featured categories</Text>
          <View style={styles.categoryBox}>
            <TouchableOpacity style={styles.categoryItem}>
              <View style={styles.categoryImgBox}>
                <Image
                  source={require("../assets/Images/Home/yoga.png")}
                  style={styles.categoryImg}
                />
              </View>
              <Text style={styles.categoryText}>Yoga</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryItem}>
              <View style={styles.categoryImgBox}>
                <Image
                  source={require("../assets/Images/Home/gym.png")}
                  style={styles.categoryImg}
                />
              </View>
              <Text style={styles.categoryText}>Gym</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryItem}>
              <View style={styles.categoryImgBox}>
                <Image
                  source={require("../assets/Images/Home/fitness.png")}
                  style={styles.categoryImg}
                />
              </View>
              <Text style={styles.categoryText}>Fitness</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryItem}>
              <View style={styles.categoryImgBox}>
                <Image
                  source={require("../assets/Images/Home/run.png")}
                  style={styles.categoryImg}
                />
              </View>
              <Text style={styles.categoryText}>Run</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginTop: 34 }}>
          <Text style={styles.titleText}>Today plan</Text>

          <ScrollView style={{ height: "45%" }}>
            <View style={styles.planBox}>
              <Image
                source={require("../assets/Images/Home/running.png")}
                style={styles.planImage}
              />
              <View style={styles.planDetail}>
                <Text
                  style={{
                    fontFamily: "NotoSans-Medium",
                  }}>
                  5 km running
                </Text>
                <Text style={styles.planTime}>19 minutes</Text>
                <View style={styles.planBarBox}>
                  <View style={[styles.planBar, { width: "68%" }]}></View>
                </View>
              </View>
            </View>
            <View style={[styles.planBox, { paddingBottom: "29%" }]}>
              <Image
                source={require("../assets/Images/Home/yoga-warmup.png")}
                style={styles.planImage}
              />
              <View style={styles.planDetail}>
                <Text
                  style={{
                    fontFamily: "NotoSans-Medium",
                  }}>
                  Yoga warm-up
                </Text>
                <Text style={styles.planTime}>12 minutes</Text>
                <View style={styles.planBarBox}>
                  <View style={[styles.planBar, { width: "90%" }]}></View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    alignItems: "center",
    backgroundColor: "#F6F5F8",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 52,
    paddingHorizontal: 22,
    paddingBottom: 20,
  },

  body: {
    paddingHorizontal: 24,
    marginTop: 20,
  },

  titleText: {
    fontSize: 18,
    fontFamily: "Ubuntu-Medium",
    marginBottom: 18,
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    marginTop: 28,
  },

  input: {
    alignItems: "center",
    borderRadius: 28,
    backgroundColor: "#F6F5F8",
    columnGap: 10,
    flexDirection: "row",
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  categoryBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  categoryItem: {
    alignItems: "center",
  },

  categoryImgBox: {
    backgroundColor: "#F6F5F8",
    borderRadius: 30,
    padding: 14,
    width: 60,
    height: 60,
  },

  categoryImg: {
    height: "100%",
    width: "100%",
  },

  categoryText: {
    color: "#B3B3B3",
    fontSize: 12,
    fontFamily: "NotoSans-Medium",
  },

  planBox: {
    flexDirection: "row",
    columnGap: 20,
    marginBottom: 22,
  },

  planImage: {
    width: 125,
    resizeMode: "cover",
    height: 85,
    borderRadius: 12,
  },

  planDetail: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },

  planTime: {
    fontFamily: "NotoSans-Medium",
    fontSize: 13,
    color: "gray",
  },

  planBarBox: {
    marginVertical: 7,
    backgroundColor: "#F6F5F8",
    borderRadius: 5,
  },

  planBar: {
    backgroundColor: "#F14647",
    height: 5,
    borderRadius: 5,
  },
});

export default Home;
