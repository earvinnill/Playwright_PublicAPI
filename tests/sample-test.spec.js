import { test } from "@playwright/test";
import {
    GetPositiveResponse,
    PostPositiveResponse
} from "../utils/utils"
import { set_new_booking, update_request, patch_request, negative_post } from "../payload"

test("should test Positive response in Get request", async () => {
    console.log();
    const result = await GetPositiveResponse("posts/1");
    console.log(result);

});

test('should test Positive response in post request', async () => {
    const result = await PostPositiveResponse("posts", update_request());
    console.log(result);
});
