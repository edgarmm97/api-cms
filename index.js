import app from "./src/app";
import connection from './src/database';

const main = async () => {
    try {
        app.listen(app.get('port'));
        console.log(`Server on port ${app.get('port')}`);
    } catch (error) {
        console.log(error);
    }
}

main();