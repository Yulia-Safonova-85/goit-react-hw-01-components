import { Profile } from "./Profile/Profile";
import user from "user.json";

import { Statistics } from "./Statistics/Statistics";
import data from "data.json";

import { FriendList } from "./FriendList/FriendList";
import friends from "friends.json";

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>,

  <div>
    <Statistics title="Upload stats" stats={data} />
    {/* <Statistics stats={data}/> */}

    </div>, 
    <div>
      <FriendList friends={friends} />
   </div>

  );
};
