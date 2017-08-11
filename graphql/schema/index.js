import { addMockFunctionsToSchema, buildSchemaFromTypeDefinitions } from 'graphql-tools';
import * as mocks from '/graphql/mocks';
import { schema, Query, Mutation } from './schema.graphql';
import {  Trajectory, TrajectoryState } from './Trajectory.graphql';

export const raw = [
    schema,
    Query,
    Mutation,
    Trajectory,
    TrajectoryState
];

const executable = buildSchemaFromTypeDefinitions(raw);

export const mocked = addMockFunctionsToSchema({
    mocks,
    preserveResolvers: false,
    schema: buildSchemaFromTypeDefinitions(raw),
});

export default executable;
