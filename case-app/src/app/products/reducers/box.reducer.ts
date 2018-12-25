import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { BoxActions, BoxActionTypes } from '../actions/box.actions';
import { ProductBoxModel } from "../models/product-box.model";

export interface State extends EntityState<ProductBoxModel> {
  // additional entities state properties
}

export const adapter: EntityAdapter<ProductBoxModel> = createEntityAdapter<ProductBoxModel>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: BoxActions
): State {
  switch (action.type) {
    case BoxActionTypes.UpsertProduct: {
      action.payload.product.id = action.payload.product.product.id;
      const product = state.entities[action.payload.product.id];
      if (product) {
        action.payload.product.count = action.payload.decremental ?
          (product.count - 1 === 0 ?
            1 : product.count - 1)
          : product.count + 1;
      }
      return adapter.upsertOne(action.payload.product, state);
    }

    case BoxActionTypes.DeleteProduct: {
      return adapter.removeOne(action.payload.id, state);
    }

    case BoxActionTypes.ClearProducts: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
