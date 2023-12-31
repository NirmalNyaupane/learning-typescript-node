import express from "express";
import {
  Controller,
  Post,
  Request,
  Route,
  Tags
} from "tsoa";

@Route("company")
@Tags("Company")
export class CompanyController extends Controller {
  /**
   *
   * more info here..
   * more description
   * anything.
   * @summary inserts new user
   */
  @Post()
  async registerUser(
    @Request() req: express.Request,
  ) {
    return { message: "Hello world" };
  }
}
