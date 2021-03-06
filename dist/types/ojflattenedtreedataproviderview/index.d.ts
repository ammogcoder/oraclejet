import { DataProvider, SortCriterion, FetchByKeysParameters, ContainsKeysResults, FetchByKeysResults, FetchByOffsetParameters, FetchByOffsetResults, FetchListResult,
   FetchListParameters } from '../ojdataprovider';
import { KeySet, ExpandedKeySet, ExpandAllKeySet } from '../ojkeyset';
import TreeDataProvider = require('../ojtreedataprovider');
declare class FlattenedTreeDataProviderView<K, D> implements DataProvider<K, D> {
    constructor(dataProvider: TreeDataProvider<K, D>, options?: {
        expanded?: KeySet<K>;
    });
    addEventListener(eventType: string, listener: EventListener): void;
    containsKeys(parameters: FetchByKeysParameters<K>): Promise<ContainsKeysResults<K>>;
    createOptimizedKeyMap?(initialMap?: Map<K, D>): Map<K, D>;
    createOptimizedKeySet?(initialSet?: Set<K>): Set<K>;
    dispatchEvent(evt: Event): boolean;
    fetchByKeys(parameters: FetchByKeysParameters<K>): Promise<FetchByKeysResults<K, D>>;
    fetchByOffset(parameters: FetchByOffsetParameters<D>): Promise<FetchByOffsetResults<K, D>>;
    fetchFirst(parameters?: FetchListParameters<D>): AsyncIterable<FetchListResult<K, D>>;
    getCapability(capabilityName: string): any;
    getExpandedObservable(): {
        subscribe(subscriber: ((expanded: {
            value: KeySet<K>;
            completionPromise: Promise<any>;
        }) => void)): {
            unsubscribe(): void;
            closed(): boolean;
        };
    };
    getTotalSize(): Promise<number>;
    isEmpty(): 'yes' | 'no' | 'unknown';
    removeEventListener(eventType: string, listener: EventListener): void;
    setExpanded(keySet: KeySet<K>): void;
}
export = FlattenedTreeDataProviderView;
