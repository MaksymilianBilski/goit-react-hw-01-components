import { Profile } from './Profile/Profile.jsx'
import { Statistics } from './Statistics/Statistics.jsx';
import { FriendsList } from './FriendsList/FriendsList.jsx'
import { TransactionsHistory } from './Transactions/TransactionsHistory.jsx';
import user from './data/user.json';
import data from './data/data.json'
import friends from './data/friends.json'
import transactions from './data/transactions.json'

export const App = () => (
  <>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <FriendsList friends={friends} />
    <TransactionsHistory items={transactions} />
  </>
)
