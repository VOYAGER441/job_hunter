import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { Stack, useRouter, useGlobalSearchParams } from "expo-router";
import {
  Company,
  JobAbout,
  JobTabs,
  JobFooter,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";
import { COLORS, SIZES, icons } from "../../constants";
import useFetch from "../../hook/useFetch";

import {
  handleNativeShare,
  handleWhatsAppShare,
  handleTelegramShare,
} from "../../utils/shareUtils";

const tabs = ["About", "Qualification", "Responsibility","Benefits"];

const jobDetails = () => {
  const params = useGlobalSearchParams();
  const router = useRouter();
  const { data, isLoading, error, reFetch } = useFetch("job-details", {
    job_id: params.id,
  });

  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const onRefresh = () => {
    reFetch();
    setRefreshing(false);
  };

  const displayTabContain = () => {
    switch (activeTab) {
      case "Qualification":
        return (
          <Specifics
            title="Qualification"
            points={data[0].job_highlights?.Qualifications ?? ["No Data"]}
          />
        );
      case "About":
        return <JobAbout info={data[0].job_description ?? "No Data"} />;
      case "Benefits":
        return (
          <Specifics
            title="Benefits"
            points={data[0].job_highlights?.Benefits ?? ["No Data"]}
          />
        );
      case "Responsibility":
        return (
          <Specifics
            title="Responsibility"
            points={data[0].job_highlights?.Responsibilities ?? ["No Data"]}
          />
        );
      default:
        return null;
    }
  };

  const handleShare = () => {
    if (data && data.length > 0) {
      const shareMessage = `Check out this job opportunity: ${data[0].job_title} at ${data[0].employer_name}. Location: ${data[0].job_location}. Learn more: https://example.com/job-details/${params.id}`;
      handleNativeShare(shareMessage, "Job Opportunity");
    } else {
      alert("No job data available to share.");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              icons={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              icons={icons.share}
              dimension="60%"
              handlePress={handleShare} // Add share functionality here
            />
          ),
          headerTitle: "",
        }}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {isLoading ? (
          <ActivityIndicator size={SIZES.large} color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong!!</Text>
        ) : data.length === 0 ? (
          <Text>No Data</Text>
        ) : (
          <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
            <Company
              companyLogo={data[0].employer_logo}
              jobTitle={data[0].job_title}
              companyName={data[0].employer_name}
              location={data[0].job_location}
              time={data[0].job_posted_human_readable}
            />
            <JobTabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            {displayTabContain()}

            {/* Apply Link Section */}
            <View style={{ marginTop: SIZES.medium }}>
              {data[0]?.job_apply_link ? (
                <TouchableOpacity
                  style={{
                    backgroundColor: COLORS.primary,
                    padding: SIZES.small,
                    borderRadius: SIZES.small,
                    alignItems: "center",
                  }}
                  onPress={() => {
                    router.push(data[0]?.job_apply_link);
                  }}
                >
                  <Text style={{ color: COLORS.white, fontSize: SIZES.medium }}>
                    Apply Now
                  </Text>
                </TouchableOpacity>
              ) : (
                <Text style={{ color: COLORS.gray, textAlign: "center" }}>
                  No apply link available.
                </Text>
              )}
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default jobDetails;
