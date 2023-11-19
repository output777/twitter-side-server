interface TweetsProps {
  id: string;
  text: string;
  createdAt: Date | string;
  name: string;
  username: string;
  url?: string;
}

interface CreateProps {
  text: string;
  name: string;
  username: string;
  url?: string;
}

interface UpdateProps {
  id: string;
  text: string;
}

export let tweets: TweetsProps[] = [
  {
    id: '1',
    text: '트위터 테스트',
    createdAt: Date.now().toString(),
    name: 'oh',
    username: 'oh',
    url: 'test',
  },
  {
    id: '2',
    text: '테스트',
    createdAt: Date.now().toString(),
    name: 'test',
    username: 'test',
    url: 'test',
  },
];

export async function getAll() {
  return tweets;
}

export async function getByUsername(username: string) {
  return tweets.filter((t) => t.username === username);
}

export async function getById(id: string) {
  return tweets.find((tweet) => tweet.id === id);
}

export async function create({text, name, username, url}: CreateProps) {
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
    url,
  };
  tweets = [tweet, ...tweets];
  return tweet;
}

export async function remove(id: string) {
  tweets = tweets.filter((t) => t.id !== id);
}

export async function update({id, text}: UpdateProps) {
  const tweet = tweets.find((t) => t.id === id);
  if (tweet) {
    tweet.text = text;
  }
  return tweet;
}
