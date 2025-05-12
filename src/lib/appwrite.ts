import { Client, Account, Avatars, OAuthProvider } from "appwrite";

export const config = {
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

export async function login() {
  try {
    const redirectUri = `${window.location.origin}/`; // Adjust path based on router
    // This automatically redirects — no need to handle the URL
    const response = await account.createOAuth2Token(
      OAuthProvider.Google,
      redirectUri,
      redirectUri
    );

    console.log("response", response);
    // alert(response);
    if (!response) throw new Error("Failed to login error 1");

    const urlParams = new URLSearchParams(window.location.search);
    const secret = urlParams.get("secret")?.toString();
    const userId = urlParams.get("userId")?.toString();

    if (!secret || !userId) throw new Error("Failed to login error 3");
    const session = await account.createSession(userId, secret);

    if (!session) throw new Error("Failed to create a session");

    return true;
  } catch (error) {
    console.error("Login error:", error);
  }
}

// OAuth callback handling
export async function handleOAuthCallback() {
  try {
    const params = new URLSearchParams(window.location.search);
    const secret = params.get("secret");
    const userId = params.get("userId");

    if (!secret || !userId) throw new Error("Missing secret or userId");

    const session = await account.createSession(userId, secret);
    return session;
  } catch (error) {
    console.error("Callback error:", error);
    return null;
  }
}

export async function getCurrentUser() {
  try {
    const response = await account.get();
    if (response.$id) {
      //then generate a avatar
      const userAvatar = avatar.getInitials(response.name);
      return {
        ...response,
        avatar: userAvatar.toString(),
      };
    }
  } catch (error) {
    console.error(error);
    return false;
  }
}
