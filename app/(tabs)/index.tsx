import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "iron man" }));

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />

      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />

        {moviesLoading ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            className="mt-10 self-center"
          />
        ) : moviesError ? (
          <Text>Error: {moviesError.message}</Text>
        ) : (
          <View className="flex-1 mt-5">
            <SearchBar
              onPress={() => router.push("/search")}
              placeholder="search for a movie"
            />
            <>
              <Text className="text-lg text-white font-bold mt-5 mb-3">
                Latest Movies
              </Text>

              <FlatList data={movies}
                renderItem={({item})=> (
                  <MovieCard {...item} />
                  // <Text className="text-white text-sm">{item.title}</Text>
                )}
                keyExtractor={(item)=> item.id.toString()}
                scrollEnabled={false}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: "flex-start",
                  gap: 20,
                  paddingRight: 5,
                  marginBottom: 10,
                }}
                className="mt-2 pb-32"
              />
            </>
          </View>
        )}
      </ScrollView>
    </View>
  );

}


// =======================================================================
  // const renderHeader = () => (
  //   <>
  //     <Image source={images.bg} className="absolute w-full z-0" />
  //     <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
  //     <SearchBar
  //       onPress={() => router.push("/search")}
  //       placeholder="search for a movie"
  //     />
  //     <Text className="text-lg text-white font-bold mt-5 mb-3">
  //       Latest Movies
  //     </Text>
  //   </>
  // );

  // if (moviesLoading) {
  //   return (
  //     <View className="flex-1 bg-primary justify-center items-center">
  //       <Image source={images.bg} className="absolute w-full z-0" />
  //       <ActivityIndicator size="large" color="#0000ff" />
  //     </View>
  //   );
  // }

  // if (moviesError) {
  //   return (
  //     <View className="flex-1 bg-primary justify-center items-center">
  //       <Image source={images.bg} className="absolute w-full z-0" />
  //       <Text className="text-white">Error: {moviesError.message}</Text>
  //     </View>
  //   );
  // }

  // return (
  //   <View className="flex-1 bg-primary">
  //     <FlatList
  //       data={movies}
  //       renderItem={({ item }) => (
  //         <Text className="text-white text-sm px-5">{item.title}</Text>
  //       )}
  //       keyExtractor={(item) => item.id.toString()}
  //       ListHeaderComponent={renderHeader}
  //       contentContainerStyle={{ paddingBottom: 10, paddingHorizontal: 5 }}
  //       showsVerticalScrollIndicator={false}
  //     />
  //   </View>
  // );

// ==============================================================

  