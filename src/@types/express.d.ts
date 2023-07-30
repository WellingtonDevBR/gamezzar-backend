import express from 'express';
import multer from 'multer';

declare module 'express' {
    export interface Request {
        file?: Express.Multer.File;
    }
}