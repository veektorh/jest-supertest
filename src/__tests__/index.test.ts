
import * as request from 'supertest';

describe("metadata-server-mock test ", () => {

    let baseUrl : string = 'http://metadata-server-mock.herokuapp.com'
    let metadataId : string = '919e8a1922aaa764b1d66407c6f62244e77081215f385b60a62091494861707079436f696e'

    it("should get metadata ", async () => {
        const res = await request(baseUrl).get(`/metadata/${metadataId}`)
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty
        expect(res.body.subject).toEqual(metadataId)

    });

    it("should get metadata property", async () => {
        const res = await request(baseUrl).get(`/metadata/${metadataId}/properties/name`)
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty
        expect(res.body.sequenceNumber).toEqual(0)

    });

    it("should post metadata", async () => {
        let subjectId : string = '789ef8ae89617f34c07f7f6a12e4d65146f958c0bc15a97b4ff169f16861707079636f696e'
        const res = await request(baseUrl).post(`/metadata/query`)
        .send({subjects : [subjectId]})
        expect(res.statusCode).toEqual(200);

    });


});