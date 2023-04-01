import axios from 'axios';

export const fetchArticle = async () => {
  const response = await axios.get('https://test.fourtrezz.info/fs/articles');
  return response.data;
};
