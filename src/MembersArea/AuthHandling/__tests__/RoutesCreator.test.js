import { flattenRoutesArray, buildRouteStructure } from '../RoutesCreator';

describe('RoutesCreator', () => {
    describe('FlattenRoutesArray', () => {

        describe('When given an empty list', () => {
            const flatList = [];

            test('Then it returns an empty list', () => {
                const flatResultFlattened = flattenRoutesArray(flatList);
                expect(flatResultFlattened).toEqual([]);
            });
        });

        describe('When given a list with objects', () => {
            const flatListWithObjects = [{}, {}];

            test('Then it returns an empty list with objects', () => {
                const flatResultFlattened = flattenRoutesArray(flatListWithObjects);
                expect(flatResultFlattened).toEqual([{}, {}]);
            });
        });

        describe('When given an unflatten list', () => {
            const unflattenList = [
                { routes: [{}, {}] },
                {}
            ];

            test('Then it returns a flatten list with objects', () => {
                const flatResultFlattened = flattenRoutesArray(unflattenList);
                expect(flatResultFlattened).toEqual([{}, {}, {}]);
            });
        });

    });

    describe('buildRouteStructure', () => {

        describe('When given a list without parentRoute', () => {
            const list = [{}];

            test('Then it throws an error', () => {
                expect(() => { buildRouteStructure('', list) }).toThrow();
            });
        });

        describe('When given an empty list', () => {
            const list = [];

            test('Then it returns an empty list', () => {
                const flatResultFlattened = buildRouteStructure('test', list);
                expect(flatResultFlattened).toEqual([]);
            });
        });




        describe('When given a list with objects but parent is defined', () => {
            const flatListWithObjects = [{}, {}];

            test('Then it returns an empty list with objects', () => {
                const flatResultFlattened = buildRouteStructure('parent', flatListWithObjects);
                expect(flatResultFlattened).toEqual([{ path: 'parent', roles: [] }, { path: 'parent', roles: [] }]);
            });
        });

        describe('When given an unflatten list but parent is defined', () => {
            const unflattenList = [
                { routes: [{}, {}] },
                {}
            ];

            test('Then it returns an unflatten list', () => {
                const flatResultFlattened = buildRouteStructure('parent', unflattenList);
                expect(flatResultFlattened).toEqual([
                    {
                        path: 'parent',
                        roles: [],
                        routes: [{ path: 'parent', roles: [] }, { path: 'parent', roles: [] }]
                    },
                    { path: 'parent', roles: [] }
                ]);
            });
        });

        describe('When given a list with the first parent to have role admin and subroutes without roles', () => {
            const listWithParentRoles = [
                {
                    roles: ['admin'],
                    routes: [{}, {}]
                },
                {}
            ];

            test('Then it returns a list with subroutes having the same roles as the parent', () => {
                const resultArray = buildRouteStructure('parent', listWithParentRoles, [{ Name: 'admin' }]);
                expect(resultArray).toEqual([
                    {
                        path: 'parent',
                        roles: ['admin'],
                        routes: [{ path: 'parent', roles: ['admin'] }, { path: 'parent', roles: ['admin'] }]
                    },
                    { path: 'parent', roles: [] }
                ]);
            });
        });
        describe('When given a list with the first parent to have role admin and subroutes without roles', () => {
            const listWithParentRoles = [
                {
                    roles: ['admin'],
                    routes: [{}, {}]
                },
                {}
            ];

            test('Then it returns a list with subroutes having the same roles as the parent', () => {
                const resultArray = buildRouteStructure('parent', listWithParentRoles, [{ Name: 'admin' }]);
                expect(resultArray).toEqual([
                    {
                        path: 'parent',
                        roles: ['admin'],
                        routes: [{ path: 'parent', roles: ['admin'] }, { path: 'parent', roles: ['admin'] }]
                    },
                    { path: 'parent', roles: [] }
                ]);
            });
        });

        describe('When given a list with the first parent to have role admin and subroutes having same roles', () => {
            const listWithParentRoles = [
                {
                    roles: ['admin'],
                    routes: [{ roles: ['admin'] }, { roles: ['admin'] }]
                },
                {}
            ];

            test('Then it returns a list with subroutes having the same roles as the parent (without duplicates)', () => {
                const resultArray = buildRouteStructure('parent', listWithParentRoles, [{ Name: 'admin' }]);
                expect(resultArray).toEqual([
                    {
                        path: 'parent',
                        roles: ['admin'],
                        routes: [{ path: 'parent', roles: ['admin'] }, { path: 'parent', roles: ['admin'] }]
                    },
                    { path: 'parent', roles: [] }
                ]);
            });
        });

        describe('When given a list with the first parent to have role admin and subroutes having different roles (without duplicates)', () => {
            const listWithParentRoles = [
                {
                    roles: ['admin'],
                    routes: [{ roles: ['trainer'] }, { roles: ['finance'] }]
                },
                {}
            ];

            test('Then it returns a list with subroutes having the same roles as the parent', () => {
                const resultArray = buildRouteStructure('parent', listWithParentRoles, [{ Name: 'admin' }]);
                expect(resultArray).toEqual([
                    {
                        path: 'parent',
                        roles: ['admin'],
                        routes: [{ path: 'parent', roles: ['admin', 'trainer'] }, { path: 'parent', roles: ['admin', 'finance'] }]
                    },
                    { path: 'parent', roles: [] }
                ]);
            });
        });

    });
})