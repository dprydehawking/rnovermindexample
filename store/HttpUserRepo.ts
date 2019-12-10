import {UserRepo} from './UserRepoAbstract';
import {UserRepoInterface} from './UserRepoInterface';

/**
 * You can uncomment either one to test the fast refresh behavior on both interface and abstract class
 * In the case of extending abstract class, fast-refresh works, you can easily observe this by changing the console.log content
 * In the case of implementing interface, fast-refresh doesn't work.
 */

// export class HttpUserRepo extends UserRepo {
//   hello = () => {
//     console.log('hello abstract');
//   };
// }

export class HttpUserRepo implements UserRepo {
  hello = () => {
    console.log('hello interface');
  };
}

