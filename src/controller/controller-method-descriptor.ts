import { Function } from '@thomazmz/core-context'
import { ControllerMethodMetadata } from "./controller-method-metadata";

export type ControllerMethodDescriptor = TypedPropertyDescriptor<
  Function & { [ControllerMethodMetadata.METADATA_KEY]?: ControllerMethodMetadata }
>;
