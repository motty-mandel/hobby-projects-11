const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionID: {
            type: Schema.Types.ObjectId,
            default: Types.ObjectId,
        },
        raectionBody: {
            type: String,
            required: true,
            maxLength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: function (timestamp) {
                return new Date(timestamp).toLocaleString();
            },
        },
    }
)


const thoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: function (timestamp) {
                return new Date(timestamp).toLocaleString();
            },
        },

        username: {
            type: String,
            required: true,
        },

        reactions: [reactionSchema],
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
    }
);

thoughtsSchema.virtual('reactionCount')
.get(function () {
return this.reactions.length;
});

const Thoughts = model('thoughts', thoughtsSchema);

module.exports = Thoughts;