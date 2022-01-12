import { Auth } from "aws-amplify";

export default async function isAuthed(){
    try {
        await Auth.currentAuthenticatedUser();
        return true;
    } catch(e) {
        console.error(e);
        return false;
    }
}
