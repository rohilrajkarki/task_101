import { Client, Account, Avatars, OAuthProvider } from "appwrite";

export const config = {
  platform: "com.real.state",
  endpoint: import.meta.env.VITE_APPWRITE_ENDPOINT,
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  //   databaseId: import.meta.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
  //   galleriesCollectionId:
  //     import.meta.env.EXPO_PUBLIC_APPWRITE_GALLERIES_COLLECTION_ID,
  //   agentsCollectionId: import.meta.env.EXPO_PUBLIC_APPWRITE_AGENTS_COLLECTION_ID,
  //   reviewsCollectionId: import.meta.env.EXPO_PUBLIC_APPWRITE_REVIEWS_COLLECTION_ID,
  //   propertiesCollectionId:
  //     import.meta.env.EXPO_PUBLIC_APPWRITE_PROPERTIES_COLLECTION_ID,
};

export const client = new Client();

client.setEndpoint(config.endpoint!).setProject(config.projectId!);

export const avatar = new Avatars(client); //for image avatar
export const account = new Account(client);

// export async function login() {
//   //Using expo linking to handling deep links and redirect URLs
//   try {
//     // const redirectUri = Linking.createURL("/"); //redirect to home
//     const response = await account.createOAuth2Token(
//       OAuthProvider.Google,
//       "http://localhost:5173/" //redirectUri
//     );
//     if (!response) throw new Error("Failed to login error 1");

//     const session = await account.getSession("current");

//     // Provider information
//     console.log("the user's session ", session.provider);

//     return true;
//   } catch (error) {
//     console.log(error);
//     return false;
//   }
// }

// export async function logout() {
//   try {
//     const response = await account.get();
//     await account.deleteSession("current");
//     console.log("logging out", response.email);
//     return true;
//   } catch (error) {
//     console.error(error);
//     return false;
//   }
// }

export const loginWithGoogle = async () => {
  try {
    await account.createOAuth2Session(
      OAuthProvider.Google,
      "http://localhost:5173/"
    );
  } catch (error) {
    console.error(error);
  }
};

export const logoutUser = async () => {
  try {
    await account.deleteSession("current");
  } catch (error) {
    console.error(error);
  }
};

export const getUser = async () => {
  try {
    return await account.get();
  } catch (error) {
    console.error(error);
  }
};

// export async function getCurrentUser() {
//   try {
//     const response = await account.get();
//     if (response.$id) {
//       //then generate a avatar
//       const userAvatar = avatar.getInitials(response.name);
//       return {
//         ...response,
//         avatar: userAvatar.toString(),
//       };
//     }
//   } catch (error) {
//     console.error(error);
//     return false;
//   }
// }
