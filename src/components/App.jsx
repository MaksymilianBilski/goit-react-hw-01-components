import { Profile } from './Profile/Profile.jsx'
import { Statistics } from './Statistics/Statistics.jsx';
import { Friends } from './Friends/Friends.jsx'
import { Transaction } from './Transactions/Transaction.jsx';
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
    <Friends friends={friends} />
    <Transaction item={transactions} />
  </>
)
