import { IEntityNamedModel } from "../entity/entity-named.model";
import { IEntityModel } from "../entity/entity.model";
import { MetodicActionDomainModel } from "./action.model";

export interface IMetodicDomainModel {
  actions: MetodicActionDomainModel[];
}

export type MetodicDomainModel = IMetodicDomainModel & IEntityModel & IEntityNamedModel;
