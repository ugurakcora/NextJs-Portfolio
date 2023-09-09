import axios from 'axios';

export async function getPinnedRepos(username: string) {
  try {
    const response = await axios.get(
      `https://gh-pinned-repos.egoist.dev/?username=${username}`
    );
    return response.data;
  } catch (error) {
    throw new Error('API isteği sırasında hata oluştu');
  }
}