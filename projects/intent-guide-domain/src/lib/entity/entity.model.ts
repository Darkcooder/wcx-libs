import { EntityPermission } from "./entity-permissions.enum";

export interface IEntityModel {
  id: number;
  permissions: EntityPermission[],
}
