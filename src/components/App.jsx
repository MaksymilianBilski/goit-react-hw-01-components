import { Profile } from './profile/Profile.js'
import { Statistics } from './statistics/Statistic.js';
import { Friends } from './friends/Friends.js'
import { Transaction } from './transactions/Transaction.js';
import user from './datas/user.json';
import data from './datas/data.json'
import friends from './datas/friends.json'
import transactions from './datas/transactions.json'



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
