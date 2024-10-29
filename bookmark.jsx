import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, FlatList, Image } from 'react-native';
import EmptyStateBookmarks from '../../components/EmptyStateBookmarks';

import { useBookmarks } from '../../context/BookmarkProvider';
import VideoCardOriginal from '../../components/VideoCardOriginal';




 const Bookmark = () => {

  const { bookmarks, toggleBookmark } = useBookmarks(); // Access bookmarks here
  // console.log("BOOKMARKS info:", bookmarks);

   return (
  <SafeAreaView className="bg-primary h-full">

  <FlatList
    data={bookmarks}  // Use bookmarks instead of posts; should be coming from home

    keyExtractor={(item) => item.$id}

    renderItem={({ item }) => <VideoCardOriginal 
    video={item} 
    onBookmarkPress={() => toggleBookmark(item)}
    />}

    ListHeaderComponent={() => (
      <View className="my-6 px-4 space-y-6">
        <Text className="font-psemibold text-2xl text-white">
          Your Bookmarked Videos
        </Text>
      </View>
    )}
    ListEmptyComponent={() => (
      <EmptyStateBookmarks
        title="No Bookmarked Videos"
        subtitle="Bookmark your favorite videos"
      />
    )}
  />

</SafeAreaView>
   );
 };
 
 export default Bookmark;