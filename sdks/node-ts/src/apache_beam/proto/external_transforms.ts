// @generated by protobuf-ts 2.1.0 with parameter generate_dependencies
// @generated from protobuf file "external_transforms.proto" (package "org.apache.beam.model.pipeline.v1", syntax proto3)
// tslint:disable
//
//
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
//
//
// Protocol Buffers describing the external transforms available.
//
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Schema } from "./schema";
/**
 * A configuration payload for an external transform.
 * Used as the payload of ExternalTransform as part of an ExpansionRequest.
 *
 * @generated from protobuf message org.apache.beam.model.pipeline.v1.ExternalConfigurationPayload
 */
export interface ExternalConfigurationPayload {
    /**
     * A schema for use in beam:coder:row:v1
     *
     * @generated from protobuf field: org.apache.beam.model.pipeline.v1.Schema schema = 1;
     */
    schema?: Schema;
    /**
     * A payload which can be decoded using beam:coder:row:v1 and the given
     * schema.
     *
     * @generated from protobuf field: bytes payload = 2;
     */
    payload: Uint8Array;
}
/**
 * Defines specific expansion methods that may be used to expand cross-language
 * transforms.
 * Has to be set as the URN of the transform of the expansion request.
 *
 * @generated from protobuf message org.apache.beam.model.pipeline.v1.ExpansionMethods
 */
export interface ExpansionMethods {
}
/**
 * @generated from protobuf enum org.apache.beam.model.pipeline.v1.ExpansionMethods.Enum
 */
export enum ExpansionMethods_Enum {
    /**
     * Expand a Java transform using specified constructor and builder methods.
     * Transform payload will be of type JavaClassLookupPayload.
     *
     * @generated from protobuf enum value: JAVA_CLASS_LOOKUP = 0;
     */
    JAVA_CLASS_LOOKUP = 0
}
/**
 * A configuration payload for an external transform.
 * Used to define a Java transform that can be directly instantiated by a Java
 * expansion service.
 *
 * @generated from protobuf message org.apache.beam.model.pipeline.v1.JavaClassLookupPayload
 */
export interface JavaClassLookupPayload {
    /**
     * Name of the Java transform class.
     *
     * @generated from protobuf field: string class_name = 1;
     */
    className: string;
    /**
     * A static method to construct the initial instance of the transform.
     * If not provided, the transform should be instantiated using a class
     * constructor.
     *
     * @generated from protobuf field: string constructor_method = 2;
     */
    constructorMethod: string;
    /**
     * The top level fields of the schema represent the method parameters in
     * order.
     * If able, top level field names are also verified against the method
     * parameters for a match.
     * Any field names in the form 'ignore[0-9]+' will not be used for validation
     * hence that format can be used to represent arbitrary field names.
     *
     * @generated from protobuf field: org.apache.beam.model.pipeline.v1.Schema constructor_schema = 3;
     */
    constructorSchema?: Schema;
    /**
     * A payload which can be decoded using beam:coder:row:v1 and the provided
     * constructor schema.
     *
     * @generated from protobuf field: bytes constructor_payload = 4;
     */
    constructorPayload: Uint8Array;
    /**
     * Set of builder methods and corresponding parameters to apply after the
     * transform object is constructed.
     * When constructing the transform object, given builder methods will be
     * applied in order.
     *
     * @generated from protobuf field: repeated org.apache.beam.model.pipeline.v1.BuilderMethod builder_methods = 5;
     */
    builderMethods: BuilderMethod[];
}
/**
 * This represents a builder method of the transform class that should be
 * applied in-order after instantiating the initial transform object.
 * Each builder method may take one or more parameters and has to return an
 * instance of the transform object.
 *
 * @generated from protobuf message org.apache.beam.model.pipeline.v1.BuilderMethod
 */
export interface BuilderMethod {
    /**
     * Name of the builder method
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * The top level fields of the schema represent the method parameters in
     * order.
     * If able, top level field names are also verified against the method
     * parameters for a match.
     * Any field names in the form 'ignore[0-9]+' will not be used for validation
     * hence that format can be used to represent arbitrary field names.
     *
     * @generated from protobuf field: org.apache.beam.model.pipeline.v1.Schema schema = 2;
     */
    schema?: Schema;
    /**
     * A payload which can be decoded using beam:coder:row:v1 and the builder
     * method schema.
     *
     * @generated from protobuf field: bytes payload = 3;
     */
    payload: Uint8Array;
}
// @generated message type with reflection information, may provide speed optimized methods
class ExternalConfigurationPayload$Type extends MessageType<ExternalConfigurationPayload> {
    constructor() {
        super("org.apache.beam.model.pipeline.v1.ExternalConfigurationPayload", [
            { no: 1, name: "schema", kind: "message", T: () => Schema },
            { no: 2, name: "payload", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value?: PartialMessage<ExternalConfigurationPayload>): ExternalConfigurationPayload {
        const message = { payload: new Uint8Array(0) };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ExternalConfigurationPayload>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ExternalConfigurationPayload): ExternalConfigurationPayload {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* org.apache.beam.model.pipeline.v1.Schema schema */ 1:
                    message.schema = Schema.internalBinaryRead(reader, reader.uint32(), options, message.schema);
                    break;
                case /* bytes payload */ 2:
                    message.payload = reader.bytes();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ExternalConfigurationPayload, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* org.apache.beam.model.pipeline.v1.Schema schema = 1; */
        if (message.schema)
            Schema.internalBinaryWrite(message.schema, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* bytes payload = 2; */
        if (message.payload.length)
            writer.tag(2, WireType.LengthDelimited).bytes(message.payload);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message org.apache.beam.model.pipeline.v1.ExternalConfigurationPayload
 */
export const ExternalConfigurationPayload = new ExternalConfigurationPayload$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ExpansionMethods$Type extends MessageType<ExpansionMethods> {
    constructor() {
        super("org.apache.beam.model.pipeline.v1.ExpansionMethods", []);
    }
    create(value?: PartialMessage<ExpansionMethods>): ExpansionMethods {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ExpansionMethods>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ExpansionMethods): ExpansionMethods {
        return target ?? this.create();
    }
    internalBinaryWrite(message: ExpansionMethods, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message org.apache.beam.model.pipeline.v1.ExpansionMethods
 */
export const ExpansionMethods = new ExpansionMethods$Type();
// @generated message type with reflection information, may provide speed optimized methods
class JavaClassLookupPayload$Type extends MessageType<JavaClassLookupPayload> {
    constructor() {
        super("org.apache.beam.model.pipeline.v1.JavaClassLookupPayload", [
            { no: 1, name: "class_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "constructor_method", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "constructor_schema", kind: "message", T: () => Schema },
            { no: 4, name: "constructor_payload", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 5, name: "builder_methods", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => BuilderMethod }
        ]);
    }
    create(value?: PartialMessage<JavaClassLookupPayload>): JavaClassLookupPayload {
        const message = { className: "", constructorMethod: "", constructorPayload: new Uint8Array(0), builderMethods: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<JavaClassLookupPayload>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: JavaClassLookupPayload): JavaClassLookupPayload {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string class_name */ 1:
                    message.className = reader.string();
                    break;
                case /* string constructor_method */ 2:
                    message.constructorMethod = reader.string();
                    break;
                case /* org.apache.beam.model.pipeline.v1.Schema constructor_schema */ 3:
                    message.constructorSchema = Schema.internalBinaryRead(reader, reader.uint32(), options, message.constructorSchema);
                    break;
                case /* bytes constructor_payload */ 4:
                    message.constructorPayload = reader.bytes();
                    break;
                case /* repeated org.apache.beam.model.pipeline.v1.BuilderMethod builder_methods */ 5:
                    message.builderMethods.push(BuilderMethod.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: JavaClassLookupPayload, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string class_name = 1; */
        if (message.className !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.className);
        /* string constructor_method = 2; */
        if (message.constructorMethod !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.constructorMethod);
        /* org.apache.beam.model.pipeline.v1.Schema constructor_schema = 3; */
        if (message.constructorSchema)
            Schema.internalBinaryWrite(message.constructorSchema, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* bytes constructor_payload = 4; */
        if (message.constructorPayload.length)
            writer.tag(4, WireType.LengthDelimited).bytes(message.constructorPayload);
        /* repeated org.apache.beam.model.pipeline.v1.BuilderMethod builder_methods = 5; */
        for (let i = 0; i < message.builderMethods.length; i++)
            BuilderMethod.internalBinaryWrite(message.builderMethods[i], writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message org.apache.beam.model.pipeline.v1.JavaClassLookupPayload
 */
export const JavaClassLookupPayload = new JavaClassLookupPayload$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BuilderMethod$Type extends MessageType<BuilderMethod> {
    constructor() {
        super("org.apache.beam.model.pipeline.v1.BuilderMethod", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "schema", kind: "message", T: () => Schema },
            { no: 3, name: "payload", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value?: PartialMessage<BuilderMethod>): BuilderMethod {
        const message = { name: "", payload: new Uint8Array(0) };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<BuilderMethod>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BuilderMethod): BuilderMethod {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                case /* org.apache.beam.model.pipeline.v1.Schema schema */ 2:
                    message.schema = Schema.internalBinaryRead(reader, reader.uint32(), options, message.schema);
                    break;
                case /* bytes payload */ 3:
                    message.payload = reader.bytes();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: BuilderMethod, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        /* org.apache.beam.model.pipeline.v1.Schema schema = 2; */
        if (message.schema)
            Schema.internalBinaryWrite(message.schema, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* bytes payload = 3; */
        if (message.payload.length)
            writer.tag(3, WireType.LengthDelimited).bytes(message.payload);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message org.apache.beam.model.pipeline.v1.BuilderMethod
 */
export const BuilderMethod = new BuilderMethod$Type();
