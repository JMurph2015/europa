import { Manager } from 'graph-object';

export default class TrajectoryManager extends Manager {
    findByID(id) {
        return this.find({ 'trajectory.id': id });
    }
}