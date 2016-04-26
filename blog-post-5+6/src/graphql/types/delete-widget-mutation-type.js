import { GraphQLID } from 'graphql';
import { mutationWithClientMutationId, fromGlobalId } from 'graphql-relay';
import { viewerType } from './viewer-type';
import { getViewer, deleteWidget } from '../../database';

export const deleteWidgetMutationType = mutationWithClientMutationId({
	name: 'DeleteWidget',
	inputFields: {
		widgetId: { type: GraphQLID }
	},
	outputFields: {
		viewer: {
			type: viewerType,
			resolve: () => getViewer(1)
		},
		widgetId: {
			type: GraphQLID,
			resolve: widget => widget.id
		}
	},
	mutateAndGetPayload: ({widgetId}) => deleteWidget(parseInt(fromGlobalId(widgetId).id, 10))		 
});