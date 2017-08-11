import { Model, allow } from 'graph-object';
import { TrajectoryManager } from '/graphql/managers';
// TODO create User auth
// import User from './User';

export default class Trajectory extends Model {
    static managers = {
        objects: TrajectoryManager,
    };
}

allow(Trajectory, {
    read(context) {
        return this.user.group === context.userId || !this.restricted;
    },
    update(context) {
        return this.user.group === context.userId || !this.restricted;
    },
});